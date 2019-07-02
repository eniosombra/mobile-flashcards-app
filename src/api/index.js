import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MOBILE_FLASHCARDS_APP'

export function saveDeck(title) {
	return AsyncStorage.mergeItem(
		STORAGE_KEY,
		JSON.stringify({
			[title]: {
				title,
				questions: []
			}
		})
	)
}

export function getAllDecks() {
	return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		const data = JSON.parse(results)
		return data
	})
}

export function getDeckByKey(key) {
	return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		const data = JSON.parse(results)
		return data[key]
	})
}

export function addCard(key, question, answer) {
	return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		const data = JSON.parse(results)
		data[key].questions.push({ question, answer })
		AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	})
}

export function getDeck(title) {
	return getAllDecks()
	  .then((decks) => decks[title]);
  }
  

export const clearAsyncStorage = async () => await AsyncStorage.clear()
