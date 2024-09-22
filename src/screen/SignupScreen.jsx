import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';


const SignupScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/logo-signup.png')} style={styles.logo} />
    <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput style ={styles.textInput} placeholder='Enter your email address'keyboardType='email-address'/>
        </View>

      </View>


      <View style={styles.passContainer}>
        <View style={styles.passInput}>
          <TextInput style ={styles.textInput} placeholder='Enter your password' secureTextEntry={true}/>
        </View>
    </View>

      <View style={styles.passContainer}>
        <View style={styles.passInput}>
          <TextInput style ={styles.textInput} placeholder='Confirm Password' secureTextEntry={true}/>
        </View>
    </View>
    
        <TouchableOpacity style={styles.signupWrapper}>
            <Text style={styles.signtext}>SIGNUP</Text>
        </TouchableOpacity>




    </View>
    
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white, },

    formContainer: {
    marginTop: -90,
    width: '85%', 
    
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#6279B8", 
    padding: 5,
    marginBottom: 2,
    borderRadius:10,
    paddingLeft:15
    
  },
  passContainer: {
    marginTop: 20,
    width: '85%', 
    
  },
  passInput: {
    borderWidth: 1,
    borderColor: "#6279B8", 
    padding: 5,
    marginBottom: 5,
    borderRadius:10,
    paddingLeft:15},

    signupWrapper:{
        backgroundColor: "#6279B8",
        width:"70%",
        padding:15,
        alignItems:"center",
        
        marginVertical: 30,
        borderRadius:100
         },
    signtext:{
        color: colors.white,
        fontWeight:"bold",
        fontSize: 18}
        
})