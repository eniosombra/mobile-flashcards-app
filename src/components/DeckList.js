import React from 'react'

import { getAllDecks } from '../api'
import { navigateTo } from '../utils'
import { AppContainer, AppText, AppTextButton, AppButton, AppDeckList, AppTitle } from '../styles'
import Deck from './Deck'

class DeckList extends React.Component {

	state = { decks: [] }

	componentDidMount() {
		this.props.navigation.addListener('willFocus', () => this.getDecksData())
	}

	getDecksData = () => {
		getAllDecks().then(results => {
			this.setState(() => {
				return {
					decks: results === null ? [] : results
				}
			})
		})
	}

	render() {
		const { decks } = this.state
		const keys = Object.keys(this.state.decks).sort()

		if (keys.length) {
			return (
				<AppContainer>
					<AppDeckList showsVerticalScrollIndicator={false}>
						<AppTitle>My Decks</AppTitle>

						{keys.map(id => {
							return (
								<Deck key={id}
									navigateTo={() => navigateTo(this.props, 'DeckDetail', { idDeck: id, title: decks[id].title, cardCount: decks[id].questions.length, cards: decks[id].questions })}
									title={decks[id].title}
									cardCount={decks[id].questions.length}
								/>
							)
						})}
					</AppDeckList>
				</AppContainer>
			)
		} else {
			return (
				<AppContainer>
					<AppText>No deck was found!</AppText>
					<AppText>Do you want to include a deck?</AppText>

					<AppButton onPress={() => navigateTo(this.props, 'AddDeck')}>
						<AppTextButton>Add Deck</AppTextButton>
					</AppButton>
				</AppContainer>
			)
		}

	}
}

export default DeckList
