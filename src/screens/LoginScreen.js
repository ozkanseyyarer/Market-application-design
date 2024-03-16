import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity
} from 'react-native'
import React, {useState} from 'react'
import {Apple, Facebook, Google} from '../components/icons'

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForgotPassword = () => {
    alert('Forgot password?')
  }

  const handleSignUp = () => {
    alert('Sign up')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, you've been missed</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          onSubmitEditing={Keyboard.dismiss}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Home Page')}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.horizontalLineContainer}>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.horizontalLine}></View>
      </View>
      <View style={styles.externalLoginContainer}>
        <TouchableOpacity style={styles.externalLoginIcon}>
          <Apple />
        </TouchableOpacity>
        <TouchableOpacity style={styles.externalLoginIcon}>
          <Google />
        </TouchableOpacity>
        <TouchableOpacity style={styles.externalLoginIcon}>
          <Facebook />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.noAccountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center'
  },
  inputContainer: {
    marginTop: 20,
    width: '80%'
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  forgotPassword: {
    fontSize: 12,
    color: '#52a855',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    marginTop: 5
  },
  signInButton: {
    marginTop: 20,
    width: '80%',
    height: 60,
    backgroundColor: '#52a855',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  externalLoginContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  externalLoginIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.3,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    justifyContent: 'center'
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black'
  },
  orText: {
    marginHorizontal: 10
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  noAccountText: {
    fontSize: 16
  },
  signUpText: {
    fontSize: 16,
    color: '#52a855',
    textDecorationLine: 'underline',
    marginLeft: 5
  }
})
