import React from 'react'

import { getAllDecks, saveDeck } from '../api'
import { AlertRequiredField } from '../utils'
import { AppContainer, AppTitle, AppTextButton, AppButton, AppInput } from '../styles'


class AddDeck extends React.Component {
	state = {
		title: ''
	}

	componentDidMount() {
		this.props.navigation.addListener('willFocus', () => this.clearField())
	}

	handleSave = title => title.trim() === '' ? AlertRequiredField() : this.saveData(title)

	saveData = (data) => {
		saveDeck(data).then(() => {
			this.clearField()
			getAllDecks().then(decks => {
				this.props.navigation.navigate('DeckDetail', { idDeck: data, title: data, cardCount: 0, cards: '' })
			})
		})
	}

	clearField = () => {
		this.setState({ title: '' })
	}

	render() {
		return (
			<AppContainer>
				<AppTitle>Enter the name of the new DECK:</AppTitle>

				<AppInput
					placeholder="Deck name"
					autoCapitalize="none"
					autoCorrect={false}
					value={this.state.title}
					onChangeText={value => this.setState({ title: value })}
				/>

				<AppButton onPress={() => this.handleSave(this.state.title)}>
					<AppTextButton>Create DECK</AppTextButton>
				</AppButton>

			</AppContainer>
		)
	}
}

export default AddDeck

