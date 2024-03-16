import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const OrderItem = ({transactionID, orderDate, totalPayment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>order placed</Text>

      <View style={styles.icerik}>
        <View>
          <Text style={styles.solukText}>Transaction ID</Text>
          <Text style={styles.koyuText}>{transactionID}</Text>
        </View>
        <View>
          <Text style={styles.solukText}>Order Date</Text>
          <Text style={styles.koyuText}>{orderDate}</Text>
        </View>
        <View>
          <Text style={styles.solukText}>Total Payment</Text>
          <Text style={styles.koyuText}>{totalPayment}</Text>
        </View>
      </View>
      <View style={styles.line}></View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonleft}>
          <Text style={styles.buttonTextLeft}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight}>
          <Text style={styles.buttonTextRight}>Track Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    marginTop: 10,
    elevation: 4,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20
  },
  icerik: {flexDirection: 'row', justifyContent: 'space-between'},

  textStyle: {
    marginBottom: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f9df71',
    backgroundColor: '#fefae7',
    alignSelf: 'flex-start'
  },
  solukText: {
    fontWeight: 'bold',
    color: '#a4a4a4',
    marginBottom: 5
  },
  koyuText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#e8e8ea',
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  buttonleft: {
    width: '45%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#52a855',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRight: {
    width: '45%',
    height: 60,
    backgroundColor: '#52a855',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextLeft: {
    color: '#52a855',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonTextRight: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default OrderItem
