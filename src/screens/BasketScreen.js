import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import SvgArrowLeft from '../components/icons/ArrowLeft'
import SepettekiUrun from '../components/SepettekiUrun'
import Fatura from '../components/Fatura'
import {useNavigation} from '@react-navigation/native'

export default function BasketScreen() {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <SvgArrowLeft />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Review Summary</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView>
        <SepettekiUrun
          imageSource={require('../images/orange.png')}
          meyveAdi="Orange"
          fiyat1="35"
          fiyat2="5"
          birim="kg"
          fiyat3="10$ /1 kg"
          adetBilgisi="5"
          indirim="30"
        />
        <SepettekiUrun
          imageSource={require('../images/plum.png')}
          meyveAdi="Plum"
          fiyat1="8"
          fiyat2="500"
          birim="g"
          adetBilgisi="2"
        />

        <SepettekiUrun
          imageSource={require('../images/tomato.png')}
          meyveAdi="Orange"
          fiyat1="6"
          fiyat2="500"
          birim="g"
          adetBilgisi="1"
        />

        <Fatura
          date="Sep18, 2023"
          time="10:00"
          promoCode="DISC10OFF"
          deliveryDate="SEP 19, 2023"
          deliveryTime="01:00 AM - 08:00 AM"
          amount="120.00"
          deliveryCharge="05.00"
          tax="00.00"
          discount="35.00"
        />
      </ScrollView>
      <View style={styles.butonArkaPlan}>
        <TouchableOpacity style={styles.confirmpayment}>
          <Text style={styles.confirmPaymentText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 30,
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
    fontWeight: 'bold',
    color: '#3c3c3c'
  },
  confirmpayment: {
    marginTop: 20,
    width: '90%',
    height: 60,
    backgroundColor: '#52a855',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25
  },
  confirmPaymentText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  butonArkaPlan: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    paddingTop: 10,
    elevation: 3,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  }
})
