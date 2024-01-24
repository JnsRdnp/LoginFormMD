

import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Button, TextInput } from 'react-native-paper'
import MainAppbar from '../components/MainAppbar'


const Login = () => {
  const [formData,setFormData] = useState({username: '', password: ''})
  const [showError, setShowError] = useState(false)

  const validateAndSubmit = () => {
    setShowError(true)
    if (formData.username.length > 0 && formData.password.length > 6){
      setFormData({username: '', password: ''})
      setShowError(false)
    }
  }
   

  return (
  <>
    <MainAppbar title='Login'/>

    <View style={styles.container}>

      <TextInput label='Username'
       value={formData.username} 
       onChangeText={text => setFormData({...formData,username: text})}
       error={formData.username.length===0 && showError}
       />

      <TextInput label='Password' 
      value={formData.password} 
      keyboardType='visible-password'
      onChangeText={(text) => setFormData({...formData, password: text})}
      error={formData.password.length===0 && showError}
      />

      {/* contained tuo ympärille pallon  */}
      <Button style={styles.button} mode='contained' 
      onPress={validateAndSubmit}>Submit</Button> 

    <Text style={styles.debugStyle}>{formData.username} and {formData.password}</Text>
    </View>
  </>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap:20,
    marginBottom: '80%',
    justifyContent: 'center'
  },
  button:{
    // margin: (16,8,0,8)
    margin: (20,20)
  },
  debugStyle: {
    justifyContent: 'center',
    margin: 'auto auto',
    alignItems: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
})