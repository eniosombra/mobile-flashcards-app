import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import {
	AppContainer, AppButton, AppTextButton, AppTitle, AppViewQuestion,
	AppButtonShowAnswer, AppButtonCorrectAnswer, AppButtonIncorrectAnswer, AppViewAnswer
} from '../styles'
import { navigateTo, formatPercentage } from '../utils'

const ViewAnswer = (props) => (
	<AppViewAnswer>
		<AppTitle>{props.text}</AppTitle>
	</AppViewAnswer>
)

export default class StudyDeck extends Component {

	state = {
		correctCount: 0,
		incorrectCount: 0,
		totalAnswers: 0,
		finishedDeck: false,
		showAnswer: false,
		seqCard: 0,
	}

	restartQuiz = () => {
		this.setState({
			correctCount: 0,
			incorrectCount: 0,
			totalAnswers: 0,
			seqCard: 0,
			showAnswer: false,
			finishedDeck: false,
		})
	}

	toggleShowAnswer = (option) => {
		this.setState({ showAnswer: !option })
	}

	IsFinishedDeck = (tot_answers, card_count) => (tot_answers >= card_count) ? true : false

	handleAnswer = (answer) => {
		const { cardCount } = this.props.navigation.state.params
		let totAnswers = this.state.totalAnswers
		let seqCard = this.state.seqCard

		totAnswers++
		seqCard++
		let countC = this.state.correctCount
		let countI = this.state.incorrectCount
		const _ = (answer === 'correct') ? countC++ : countI++

		this.setState({
			correctCount: countC,
			incorrectCount: countI,
			totalAnswers: totAnswers,
			seqCard: seqCard,
			showAnswer: false,
		})


		this.IsFinishedDeck(totAnswers, cardCount) ?
			this.finishQuiz() : this.setState({ finishedDeck: false })
	}

	finishQuiz = () => {
		this.setState({ finishedDeck: true })
		clearLocalNotification()
			.then(setLocalNotification)
	}

	render() {
		const { idDeck, cardCount, cards } = this.props.navigation.state.params
		const { totalAnswers, finishedDeck, correctCount, incorrectCount, seqCard, showAnswer } = this.state

		if (finishedDeck) {
			return (
				<AppContainer>
					<AppTitle>Congratulations!</AppTitle>
					<AppTitle>You finished Deck: {idDeck}</AppTitle>
					<Text />

					<AppTitle>RESULT:</AppTitle>
					<Text>Total questions: {totalAnswers} </Text>
					<Text>Correct: {correctCount} = ({formatPercentage(totalAnswers, correctCount)}) </Text>
					<Text>Incorrect: {incorrectCount} = ({formatPercentage(totalAnswers, incorrectCount)}) </Text>
					<Text />

					<AppButton onPress={() => this.restartQuiz()}>
						<AppTextButton>Restart Quiz</AppTextButton>
					</AppButton>
					<Text />

					<AppButton onPress={() => this.props.navigation.goBack()}>
						<AppTextButton>Back to Deck</AppTextButton>
					</AppButton>
					<Text />

					<AppButton onPress={() => navigateTo(this.props, 'DeckList')}>
						<AppTextButton>Go to MyDeck</AppTextButton>
					</AppButton>
				</AppContainer>
			)
		}
		else {
			const questionText = cards[seqCard].question
			const answerText = cards[seqCard].answer

			return (
				<AppContainer>
					<AppTitle>Deck: {idDeck}</AppTitle>
					<Text>Card {totalAnswers + 1} of {cardCount}</Text>

					<Text>Correct: {correctCount}</Text>
					<Text>Incorrect: {incorrectCount}</Text>

					<AppViewQuestion>
						<AppTitle>{questionText}</AppTitle>
					</AppViewQuestion>

					{showAnswer ? <ViewAnswer text={answerText} /> : null}

					<AppButtonShowAnswer onPress={() => this.toggleShowAnswer(showAnswer)} >
						<AppTextButton>Show Answer</AppTextButton>
					</AppButtonShowAnswer>
					<Text />
					<AppButtonCorrectAnswer onPress={() => this.handleAnswer('correct')}>
						<AppTextButton>Correct</AppTextButton>
					</AppButtonCorrectAnswer>
					<Text />
					<AppButtonIncorrectAnswer onPress={() => this.handleAnswer('incorrect')}>
						<AppTextButton>Incorrect</AppTextButton>
					</AppButtonIncorrectAnswer>
				</AppContainer>
			)
		}
	}
}

