import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'
import {FilterIconSon, Search} from './icons'

const Searchbar = () => {
  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
      }}
    >
      <View
        style={{
          position: 'absolute',
          marginTop: 6,
          marginLeft: 5
        }}
      >
        <Search />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search food, Drink, etc"
        placeholderTextColor="#cfd4d8"
      />

      <TouchableOpacity>
        <View
          style={{
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            backgroundColor: '#52a855',
            marginLeft: 5,
            height: 52
          }}
        >
          <FilterIconSon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 55,
    color: 'black',
    flex: 1
  }
})

export default Searchbar
