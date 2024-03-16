import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import SvgSagOkcon from './icons/SagOkIcon'

const screenWidth = Dimensions.get('window').width

export default function RecommendBar() {
  return (
    <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: '900', fontSize: 25}}>Recommend</Text>
        <TouchableOpacity style={styles.seeAllIconContainer}>
          <Text style={styles.seeAllText}>See All</Text>
          <SvgSagOkcon />
        </TouchableOpacity>
      </View>
      {/* alt taraf kategori içerik kısmı */}
      <View style={styles.categoriView}>
        <TouchableOpacity>
          <View style={styles.categoriItem}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/tomato.png')}
                style={styles.image}
              />
              <Text style={styles.textStyle}>Tomato</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.categoriItem}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/apple2.png')}
                style={styles.image}
              />
              <Text style={styles.discountTextStyle}>-30%</Text>
              <Text style={styles.textStyle}>Apple</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  seeAllText: {
    color: '#52a855',
    fontWeight: '900',
    marginRight: 2
  },
  seeAllIconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoriItem: {
    marginTop: 20,
    width: screenWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 120,
    height: 120,
    marginLeft: 20,
    alignSelf: 'flex-start'
  },
  imageView: {
    backgroundColor: '#e1dfdf',
    borderRadius: 20,
    width: screenWidth * 0.43,
    height: screenWidth * 0.43,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative'
  },
  categoriView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontWeight: '800',
    alignSelf: 'flex-start',
    marginLeft: 20
  },
  discountTextStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#52a855',
    padding: 5,
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})
