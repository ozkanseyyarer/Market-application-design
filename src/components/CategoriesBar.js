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

export default function CategoriesBar() {
  return (
    <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: '900', fontSize: 25}}>Categories</Text>
        <TouchableOpacity style={styles.seeAllIconContainer}>
          <Text style={styles.seeAllText}>See All</Text>
          <SvgSagOkcon />
        </TouchableOpacity>
      </View>
      {/* alt taraf katogroi içerik kısmı */}
      <View style={styles.categoriView}>
        <TouchableOpacity>
          <View style={styles.categoriItem}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/honey.png')}
                style={styles.image}
              />
            </View>
            <Text style={{fontWeight: '800'}}>Jars</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.categoriItem}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/chicken.png')}
                style={styles.image}
              />
            </View>
            <Text style={{fontWeight: '800'}}>Chicken</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.categoriItem}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/apple.png')}
                style={styles.image}
              />
            </View>
            <Text style={{fontWeight: '800'}}>Fruits</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.categoriItem}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/fish.png')}
                style={styles.image}
              />
            </View>
            <Text style={{fontWeight: '800'}}>Sea Food</Text>
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
    width: 50,
    height: 50
  },
  imageView: {
    backgroundColor: '#e1dfdf',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  categoriView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})
