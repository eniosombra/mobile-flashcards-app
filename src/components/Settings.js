import React from 'react'
import { Alert, Text } from 'react-native'

import { clearAsyncStorage } from '../api'
import { navigateTo } from '../utils'
import { AppContainer, AppTitle, AppTextButton, AppButton } from '../styles'

clearAllData = (props) => clearAsyncStorage().then(() => {
	Alert.alert('All data was deleted successfully!')
	navigateTo(props, 'DeckList')
})

const Settings = (props) => {
	return (
		<AppContainer>
			<AppTitle>Settings:</AppTitle>
			<Text>Warning: This operation will delete all data.</Text>
			<AppButton onPress={() => clearAllData(props)}>
				<AppTextButton>Delete All Data</AppTextButton>
			</AppButton>
		</AppContainer>
	)
}

export default Settings
