import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function SepettekiUrun(props) {
  const {
    imageSource,
    meyveAdi,
    fiyat1,
    fiyat2,
    fiyat3,
    adetBilgisi,
    birim,
    indirim
  } = props

  return (
    <View style={styles.container}>
      {indirim && <Text style={styles.discountTextStyle}>-{indirim}%</Text>}
      <View style={{flexDirection: 'row'}}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.textler}>
          <Text style={styles.meyveAdi}>{meyveAdi}</Text>
          <View style={styles.fiyatlar}>
            <Text style={styles.fiyat1}>{fiyat1}$</Text>
            <Text style={styles.fiyat2}>
              /{fiyat2} {birim}
            </Text>
            {fiyat3 && <Text style={styles.fiyat3}>{fiyat3}</Text>}
          </View>
        </View>
      </View>
      <View style={styles.adetBilgisi}>
        <Text style={styles.adetBilgisiText}>{adetBilgisi}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    marginTop: 10,
    elevation: 4,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80
  },
  textler: {
    marginLeft: 20,
    justifyContent: 'center'
  },
  meyveAdi: {
    fontWeight: '800',
    color: '#5c5c5c'
  },
  fiyatlar: {
    flexDirection: 'row'
  },
  fiyat1: {
    fontSize: 15,
    color: '#52a855',
    fontWeight: '600'
  },
  fiyat2: {
    fontSize: 12,
    alignSelf: 'center'
  },
  fiyat3: {
    marginLeft: 10,
    alignSelf: 'center',
    fontSize: 9,
    textDecorationLine: 'line-through'
  },
  adetBilgisi: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52a855',
    borderRadius: 15, // Oval kenarlar için yarısını giriniz.
    width: 60,
    height: 60,
    elevation: 4 // Android'de gölge
  },
  adetBilgisiText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  discountTextStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#52a855',
    paddingVertical: 3,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})
