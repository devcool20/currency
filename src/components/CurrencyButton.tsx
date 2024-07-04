import React from 'react'

import type { PropsWithChildren } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string,
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}









const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#8395A7",
      padding: 10,
      borderRadius: 5,
      margin: 5,
    },
    flag: {
      fontSize: 20,
      color: "#FFFFFF",
      marginRight: 10,
    },
    country: {
      fontSize: 15,
      fontFamily: 'serif',
      color: "#FFFFFF",
    },
  });
export default CurrencyButton
