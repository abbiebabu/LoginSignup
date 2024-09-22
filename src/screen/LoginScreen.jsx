import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/medusa-logo.png')} style={styles.logo} />
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput style ={styles.textInput} placeholder='Enter your email address'keyboardType='email-address'/>
        </View>

      </View>


      <View style={styles.passContainer}>
        <View style={styles.passInput}>
          <TextInput style ={styles.textInput} placeholder='Enter your password' secureTextEntry={true}/>
        </View>
        <TouchableOpacity >
            <Text style={styles.forgetPasswordText}>Forget password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginWrapper}>
            <Text style={styles.logintext}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    <Text style={styles.continueText}> or Continue with</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white, 
  },
  logo: {
  marginTop: -30
    
  },
  formContainer: {
    marginTop: 15,
    width: '85%', 
    
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.primary, 
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
    borderColor: colors.primary, 
    padding: 5,
    marginBottom: 5,
    borderRadius:10,
    paddingLeft:15
    
  },
  forgetPasswordText:{
    textAlign:"right",
    textDecorationLine:"underline",
    color: colors.primary,
    marginTop:5
  },

  loginWrapper:{
backgroundColor: colors.primary,
width:"70%",
padding:15,
alignItems:"center",
marginLeft:50,
marginVertical: 25,
borderRadius:100
 },
 logintext:{
color: colors.white,
fontWeight:"bold",
fontSize: 18

 },
 continueText:{
    textAlign:"center"

 },
});

