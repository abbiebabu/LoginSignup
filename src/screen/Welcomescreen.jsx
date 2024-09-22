import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import{fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
const Welcomescreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login")
  }
  const handleSignup = () => {
    navigation.navigate("Signup")
  }



  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image
        source={require('../assets/splash1.png')}
        style={styles.splashOne}></Image>
      <Text style={styles.title}>SAFETY TIPS</Text>
      <Text style={styles.subTitle}>When out with friends, agree to stay together and avoid letting them go off alone with anyone.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButtonWrapper} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>


      </View>
    </View>

  );
};

export default Welcomescreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },

  logo: {
    height: 60,
    width: 60,
    marginVertical: 30,
    resizeMode: 'contain',
  },
  splashOne: {
    height: 269,
    width: 264,
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    color: colors.secondary,
    fontFamily: fonts.Regular,

  },
  subTitle:{
    fontSize:16,
    textAlign: "center",
    color: colors.secondary,
    fontFamily:fonts.Medium,
    paddingHorizontal:30,
    marginTop:10

  },
  buttonContainer:{
    flexDirection: "row",
    marginVertical:75,
    borderWidth:2,
    borderColor:colors.primary,
    width:"80%",
    height: 60,
    borderRadius:100,

  },
  loginButtonWrapper:{
justifyContent:"center",
alignItems:"center",
width:"50%",
backgroundColor: colors.primary,
borderRadius:98

  },
loginButtonText:{

color:colors.white,
fontSize:19,
fontFamily: fonts.Bold,
fontWeight:'bold',

  },
  signupButtonWrapper:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft : 40
  },
signupButtonText:{
  fontSize:19,
  fontFamily: fonts.Bold,
  fontWeight:'bold',
  color: colors.primary
}
});
