import {View, ScrollView} from 'react-native'
import React from 'react'
import OrderItem from '../components/OrderItem'

export default function ActiveScreen() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderItem
          transactionID="#GR45HGJF"
          orderDate="10, Sep"
          totalPayment="$25.00"
        />
        <OrderItem
          transactionID="#GR45HGGG"
          orderDate="11, Sep"
          totalPayment="$30.00"
        />
        <OrderItem
          transactionID="#GRASHGGG"
          orderDate="11, Sep"
          totalPayment="$30.00"
        />
        <OrderItem
          transactionID="#GR45HGGG"
          orderDate="11, Sep"
          totalPayment="$50.00"
        />
        <OrderItem
          transactionID="#GR45HGGG"
          orderDate="11, Sep"
          totalPayment="$200.00"
        />
      </ScrollView>
    </View>
  )
}
