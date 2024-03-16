import * as React from 'react'
import {ScrollView, Text, View} from 'react-native'
import Searchbar from '../components/SearchBar'
import LocationBar from '../components/LocationBar'
import BannerCarousel from '../components/BannerCarousel'
import CategoriesBar from '../components/CategoriesBar'
import RecommendBar from '../components/RecommendBar'

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 20}}>
      <View>
        <LocationBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Searchbar />
        <BannerCarousel />
        <CategoriesBar />
        <RecommendBar />
      </ScrollView>
    </View>
  )
}
