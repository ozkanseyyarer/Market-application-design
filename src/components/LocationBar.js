import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import SvgLoacitonicon from './icons/Loacitonicon'
import SvgDownicon from './icons/Downicon'
import SvgZil from './icons/Zil'

const LocationBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Location</Text>
        <View style={styles.locationContainer}>
          <SvgLoacitonicon />
          <Text style={styles.locationText}>My flat</Text>
          <SvgDownicon />
        </View>
        <View></View>
      </View>
      <View style={styles.iconContainer}>
        <SvgZil />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontSize: 16,
    marginTop: 10,
    color: 'black',
    elevation: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },

  textStyle: {
    fontWeight: 'bold',
    color: '#999999',
    marginBottom: 5
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  locationText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginHorizontal: 10
  },
  iconContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  }
})

export default LocationBar
