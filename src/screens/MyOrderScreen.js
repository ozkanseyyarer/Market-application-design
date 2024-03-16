import * as React from 'react'
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view'
import {useNavigation} from '@react-navigation/native'

// Örnek ekran bileşenleri
import ActiveScreen from './ActiveScreen'
import CompletedScreen from './CompletedScreen'
import CancelledScreen from './CancelledScreen'
import SvgArrowLeft from '../components/icons/ArrowLeft'

// TabView için scene haritalaması
const renderScene = SceneMap({
  first: ActiveScreen,
  second: CompletedScreen,
  third: CancelledScreen
})

export default function MyOrderScreen() {
  const layout = useWindowDimensions()
  const navigation = useNavigation()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {key: 'first', title: 'Active'},
    {key: 'second', title: 'Completed'},
    {key: 'third', title: 'Cancelled'}
  ])

  // TabBar özelleştirme fonksiyonu
  const renderTabLabel = ({route, focused}) => {
    let labelColor = focused ? 'gray' : 'black'
    return (
      <Text style={[styles.labelStyle, {color: labelColor}]}>
        {route.title}
      </Text>
    )
  }

  const goBack = () => {
    navigation.goBack()
  }

  // TabBar bileşeni
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#52a855',
        height: 6,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
      }}
      style={{backgroundColor: 'white'}}
      renderLabel={renderTabLabel}
    />
  )

  // Başlık ve geri butonu bileşeni
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <SvgArrowLeft />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>My Order</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {renderHeader()}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  backButton: {
    position: 'absolute',
    left: 12,
    top: 12,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'gray'
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  labelStyle: {
    fontWeight: '700'
  }
})
