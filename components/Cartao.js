import React from "react";
import { StyleSheet, Text, View } from 'react-native';


const Cartao = ({cardNumber}) => {
    return(
        <View style={styles.cartao}>
          <View>
            <Text style={styles.title}>card number</Text>
            <Text style={styles.fields}>{cardNumber}</Text> 
          </View>
          <View style={styles.cartaoBot}>
            <View>
              <Text style={styles.title}>expiration</Text>
              <Text style={styles.fields}>23/03/2002</Text>
            </View>
            <View>
              <Text style={styles.title}>CVC</Text>
              <Text style={styles.fields}>123</Text>
            </View>
          </View>     
        </View>
    )
}
const styles = StyleSheet.create({
  cartao: {
    backgroundColor: 'black',
    marginTop: '10%',
    height: '180px',
    width:'320px',
    padding: '4%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: '12px'
  },
  cartaoBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'50%',
    marginTop: '2%'

  },
  fields: {
    color: 'white'
  },
  title: {
    color: 'grey',
    fontSize: '12px'
  }
});



export default Cartao;