import React from 'react'
import { setLocalNotification } from './src/utils/helpers'

import MenuNavigator from './src/components/MenuNavigator'

export default class App extends React.Component {

	componentDidMount() {
		setLocalNotification()
	}

	render() {

		return (
			<MenuNavigator />
		)

	}
}


