import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import AddDeck from './AddDeck'
import DeckList from './DeckList'
import Settings from './Settings'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import StudyDeck from './StudyDeck'

const MenuRoutes = createBottomTabNavigator({
	DeckList: {
		name: 'MyDeck',
		screen: DeckList,
		navigationOptions: {
			title: 'My Decks',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='format-list-bulleted' size={30} color={tintColor} />
		}
	},

	AddDeck: {
		name: 'AddDeck',
		screen: AddDeck,
		navigationOptions: {
			title: 'Add Deck',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='add-box' size={30} color={tintColor} />
		}
	},

	Settings: {
		name: 'Settings',
		screen: Settings,
		navigationOptions: {
			title: 'Settings',
			tabBarIcon: ({ tintColor }) =>
				<Icon name='settings' size={30} color={tintColor} />
		}
	},
},
	{
		navigationOptions: {
			header: null
		},

		tabBarOptions: {
			initialRouteName: 'DeckList',
			activeTintColor: 'orangered',
			inactiveTintColor: 'tan',
			activeBackgroundColor: 'peachpuff',
			style: {
				height: 70,
				backgroundColor: 'oldlace'
			},
			labelStyle: {
				fontSize: 16,
			},

		},
	}
)

function defaultOption(titleScreen) {
	return {
		title: titleScreen,
		headerTintColor: 'orangered',
		headerStyle: {
			backgroundColor: 'oldlace'
		}
	}
}

const StackRoutes = createStackNavigator({

	Home: MenuRoutes,

	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: defaultOption('Individual Deck')
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: defaultOption('Create New Question')
	},
	StudyDeck: {
		screen: StudyDeck,
		navigationOptions: defaultOption('Quiz')
	},
})

const MenuNavigator = createAppContainer(StackRoutes)
export default MenuNavigator
