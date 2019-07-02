import { Alert } from 'react-native'

export const navigateTo = (ownProps, component, params) =>
    params ? ownProps.navigation.navigate(component, params) : ownProps.navigation.navigate(component)

export const formatPercentage = (total, value) =>
    ((value / total) * 100).toFixed(2) + '%'

export const AlertRequiredField = () =>
    Alert.alert('Required information! Please complete all information.')

