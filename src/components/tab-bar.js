import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Basket, Category, Home, Order, Profile} from './icons'

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        return label === 'Basket' ? (
          <View style={{flex: 1}}>
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate('Basket Screen')}
              style={{
                flex: 1,
                marginHorizontal: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#52a855',
                borderRadius: 40,
                bottom: 35
              }}
            >
              <Basket />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              marginBottom: 20,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: 10
            }}
          >
            {label === 'Home' && (
              <Home
                style={{
                  color: isFocused ? '#000000' : '#8f99a8'
                }}
              />
            )}
            {label === 'Category' && (
              <Category
                style={{
                  color: isFocused ? '#000000' : '#8f99a8'
                }}
              />
            )}
            {label === 'My Orders' && (
              <Order
                style={{
                  color: isFocused ? '#000000' : '#8f99a8'
                }}
              />
            )}
            {label === 'Profile' && (
              <Profile
                style={{
                  color: isFocused ? '#000000' : '#8f99a8'
                }}
              />
            )}
            <Text
              style={{
                color: isFocused ? '#000000' : '#b3b3b3'
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar
