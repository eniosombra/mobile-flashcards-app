import styled from 'styled-components/native'

export const AppContainer = styled.View`
  flex:1;
  background-color: lightgoldenrodyellow;
  align-items: center;
  justify-content: center;
`;

export const AppCard = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: #FFF;
  margin-bottom: 7px;
  elevation: 5;
  width: 315px;
`;

export const AppViewQuestion = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: #FFF;
  margin-bottom: 7px;
  elevation: 5;
  width: 315px;
`;

export const AppViewAnswer = styled.View`
  padding: 15px;
  border-radius: 10px;
  background: lightskyblue;
  margin-bottom: 7px;
  elevation: 5;
  width: 315px;
`;

export const AppDeckList = styled.ScrollView`
  flex:1;
  margin-top: 70px;
`;


export const AppTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const AppTitleDeck = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const AppText = styled.Text`
  font-size: 18px;
`;

export const AppTextButton = styled.Text`
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const AppButton = styled.TouchableOpacity`
  background: coral;
  padding: 10px;
  border-radius: 20px;
  elevation: 10;
  width: 190px;
`;

export const AppButtonShowAnswer = styled.TouchableOpacity`
  background: dodgerblue;
  padding: 10px;
  border-radius: 20px;
  elevation: 10;
  width: 160px;
`;

export const AppButtonCorrectAnswer = styled.TouchableOpacity`
  background: green;
  padding: 10px;
  border-radius: 20px;
  elevation: 10;
  width: 160px;
`;

export const AppButtonIncorrectAnswer = styled.TouchableOpacity`
  background: red;
  padding: 10px;
  border-radius: 20px;
  elevation: 10;
  width: 160px;
`;

export const AppInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 12px 15px;
  border-radius: 15px;
  font-size: 20px;
  color: #333;
  background: #FFF;
  width: 315px;
  margin: 20px;
  shadow-radius: 10;
`;

export const AppImage = styled.Image`
  width: 70;
  height: 70;
`;
