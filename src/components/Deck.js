import React from 'react'
import { Text, TouchableNativeFeedback } from 'react-native'

import { AppTitleDeck, AppCard } from '../styles'

const Deck = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.navigateTo} >
            <AppCard>
                <AppTitleDeck>{props.title}</AppTitleDeck>
                <Text>Cards: {props.cardCount}</Text>
            </AppCard>
        </TouchableNativeFeedback>
    )
}

export default Deck
