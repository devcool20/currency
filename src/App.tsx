/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, FlatList, Pressable} from "react-native";
import React, { useState} from 'react';

import { currencyByRupee } from "./constants";
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

const App = (): JSX.Element => {

        const [inputValue, setInputValue] = useState('')
        const [resultValue, setResultValue] = useState('')
        const [targetCurrency, setTargetCurrency] = useState('')

        const buttonPressed = (targetValue: Currency) => {
          if (!inputValue) {
            return Snackbar.show({
              text: "Enter a value to convert",
              backgroundColor: "#EA7773",
              textColor: "#000000"
            });
          }
          const inputAmount = parseFloat(inputValue)
          if (!isNaN(inputAmount)) {
            const convertedValue = inputAmount * targetValue.value
            const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
            setResultValue(result)
            setTargetCurrency(targetValue.name)
          } else {
            return Snackbar.show({
              text: "NOt a valid number to convert",
              backgroundColor: "#F4BE2C",
              textColor: "#000000"
            })
          }
        }




  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}> ₹ </Text>
            <TextInput 
            maxLength={14}
            value={inputValue}
            clearButtonMode="always"
            onChangeText={setInputValue}
            keyboardType="number-pad"
            placeholder="Enter amount in Rupees"
            style={styles.inputText}/>
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={ ({item}) => (
            <Pressable
            style={[ 
              styles.button,
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
            <CurrencyButton {...item} />
            </Pressable>
          )}
          />
        </View>
      </View>

    </ >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8395A7",
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: "#8395A7",
    fontWeight: '800',
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'palatino',
    padding: 1,



  },
  rupee: {
    marginRight: 4,

    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 30,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000000',
    color: "#000000",
    fontFamily: 'serif',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 10,
    height: 50,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },








});



export default App