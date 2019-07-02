import React from 'react'
import { Animated, Alert, Easing, Text } from 'react-native'

import { getDeck } from '../api'
import { navigateTo } from '../utils'
import { AppContainer, AppTitle, AppButton, AppTextButton, AppImage } from '../styles'
const flashcardImagem = require('../../assets/flashcard3.png')

class DeckDetail extends React.Component {

	state = { cards: [] }

	constructor() {
		super()
		this.RotateValueHolder = new Animated.Value(0)
	}

	componentDidMount() {
		this.StartImageRotateFunction()
		const { idDeck } = this.props.navigation.state.params
		this.props.navigation.addListener('willFocus', () => this.getDeckIndividual(idDeck))
	}


	getDeckIndividual = (title) => {
		getDeck(title).then(results => {
			this.setState(() => {
				return {
					cards: results === null ? [] : results
				}
			})
		})
	}


	StartImageRotateFunction() {
		this.RotateValueHolder.setValue(0)
		Animated.timing(this.RotateValueHolder, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
		}).start(() => this.StartImageRotateFunction())
	}

	startQuiz = (props) => {
		const { idDeck, cardCount } = this.props.navigation.state.params

		cardCount > 0 ?
			navigateTo(props, 'StudyDeck', { idDeck, cardCount, cards: this.state.cards.questions })
			:
			Alert.alert("There are no registered questions. Please create a new question.")
	}


	render() {
		const { idDeck, title, cardCount } = this.props.navigation.state.params

		const RotateData = this.RotateValueHolder.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		})

		return (
			<AppContainer>
				<Animated.Image
					style={{ width: 60, height: 60, transform: [{ rotate: RotateData }] }}
					source={flashcardImagem}
				/>

				<AppTitle>Deck: {title}</AppTitle>
				<Text>This deck has {cardCount} Cards</Text>
				<Text />

				<AppButton onPress={() => this.startQuiz(this.props)} >
					<AppTextButton>Start a Quiz</AppTextButton>
				</AppButton>
				<Text />

				<AppButton onPress={() => navigateTo(this.props, 'AddCard', { idDeck: idDeck, cardCount: cardCount })}>
					<AppTextButton>Create New Question</AppTextButton>
				</AppButton>
			</AppContainer>
		)
	}
}

export default DeckDetail

