import React from 'react'

import { addCard } from '../api'
import { AppContainer, AppTitle, AppInput, AppButton, AppTextButton } from '../styles'
import { AlertRequiredField, navigateTo } from '../utils'


class AddCard extends React.Component {

	state = {
		question: '',
		answer: ''
	}

	handleSave = (question, answer) => {
		(question.trim() === '' || answer.trim() === '') ? AlertRequiredField() : this.saveData(question, answer)
	}

	saveData = (question, answer) => {
		const { idDeck } = this.props.navigation.state.params
		let { cardCount } = this.props.navigation.state.params
		cardCount++

		addCard(idDeck, question, answer).then(() =>
			navigateTo(this.props, 'DeckDetail', { idDeck, cardCount })
		)
	}


	render() {
		return (
			<AppContainer>
				<AppTitle>Inform the QUESTION and ANSWER:</AppTitle>

				<AppInput
					placeholder="Question"
					autoCapitalize="none"
					autoCorrect={false}
					value={this.state.question}
					onChangeText={value => this.setState({ question: value })}
				/>

				<AppInput
					placeholder="Answer"
					autoCapitalize="none"
					autoCorrect={false}
					value={this.state.answer}
					onChangeText={value => this.setState({ answer: value })}
				/>

				<AppButton onPress={() => this.handleSave(this.state.question, this.state.answer)}>
					<AppTextButton>Save</AppTextButton>
				</AppButton>

			</AppContainer>
		)
	}
}

export default AddCard
