import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function Fatura(props) {
  const {
    date,
    time,
    promoCode,
    deliveryDate,
    deliveryTime,
    amount,
    deliveryCharge,
    tax,
    discount
  } = props
  return (
    <View style={styles.anaContainer}>
      <View>
        <View style={styles.container}>
          <Text style={styles.solText}>Order Date</Text>
          <Text style={styles.sagText}>
            {date} | {time}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.solText}>Promo code</Text>
          <Text style={styles.sagText}>{promoCode}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.solText}>Delivery Date</Text>
          <Text style={styles.sagText}>{deliveryDate}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.solText}>Delivery Time</Text>
          <Text style={styles.sagText}>{deliveryTime}</Text>
        </View>
      </View>
      <View style={styles.line}></View>

      <View>
        <View style={styles.container}>
          <Text style={styles.solText}>Amount</Text>
          <Text style={styles.sagText}>${amount}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.solText}>Delivery Charge</Text>
          <Text style={styles.sagText}>${deliveryCharge}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.solText}>Tax</Text>
          <Text style={styles.sagText}>${tax}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.solText}>Discount</Text>
          <Text style={styles.sagText}>-${discount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  anaContainer: {
    marginHorizontal: 20,
    marginTop: 15
  },
  container: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  solText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a1a1a1'
  },
  sagText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#e8e8ea',
    marginVertical: 10
  }
})
