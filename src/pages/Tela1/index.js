import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/icon.png';

  export default function tela () {
    const navigation = useNavigation ();

  return (

    <View style={styles.container}>
      <Image 
       source={logoImg}
       style={styles.logo}
      />

      <TouchableOpacity 
          style = {styles.button}
          onPress = {() => navigation.navigate('Login') }>
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style = {styles.button}
          onPress = {() => navigation.navigate('Cadastro') }>
        <Text style = {styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>

    </View>
    );
  }
  const styles = StyleSheet.create({

    button: {
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#F74B02',
        textAlign: 'center',
        borderColor: '#0B0D88',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: {
        height: 1,
        width: 1 },
        alignSelf: 'center',
        marginBottom: 20,
    },
  
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 15,
      textAlign: 'center'
      
    },
    
    logo: {
      width: 250,
      height: 250,
      //marginTop: -80,
      resizeMode : "contain",
       
    },
  
    container: {
      flex: 1,
      backgroundColor: '#E5E6E8',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
   
  });  