import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Cartao from './components/Cartao';


export default function App() {
  const [cardNumber, setCardNumber] = React.useState(" ")
  

  return (
    <View>
      <View style={styles.container}>
        <Cartao
          cardNumber = {cardNumber}
        />
      </View>
      <TextInput
          style={styles.inputs}
          label="card number"
          value={cardNumber}
          onChangeText={cardNumber=> setCardNumber(cardNumber)}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'grey',
    padding: '6%'
  },
  inputs: {
    margin: '2%'
  }

});

