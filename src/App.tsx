import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBar from './components/tab-bar'
import HomeScreen from './screens/HomeScreen'
import CategoryScreen from './screens/CategoryScreen'
import BasketScreen from './screens/BasketScreen'
import MyOrderScreen from './screens/MyOrderScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="My Orders"
        component={MyOrderScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login Page"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home Page"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basket Screen"
          component={BasketScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
