import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import { Divider } from 'react-native-elements';

export default class escolheProduto extends Component {

    
    
    render() {
        return(
          <View style={styles.container}>
            <TouchableOpacity 
              style = {styles.seta}>
                <Feather name="chevron-left" size={38} color="#0B0D88" />
            </TouchableOpacity>
            <Image 
              source={Logo} 
              style={styles.logo} />
            <Text style={styles.subTitulo}>O seu Gás em casa</Text>
            <Text style={styles.titulo}>Seja Bem-Vindo(a)!</Text>
            <View style={styles.card}>
            <Text style={styles.cardTitulo}>E-mail</Text>
            </View>
            <View style={styles.card}>
            <Text style={styles.cardTitulo}>Senha</Text>
            </View>
            <TouchableOpacity style = {styles.button}><Text style={{color: 'white'}}>ENTRE</Text></TouchableOpacity>
            <Text style={styles.subTitulo}>Esqueceu sua senha?</Text>
            <View style={styles.cardContent}>
              <Image source={Gas1} 
              style={styles.gas} />
              <Text style={styles.cardPrice}>R$ XX,XX</Text>
              <Divider style={styles.gas}/>
            </View>


                <Divider style={{ backgroundColor: 'blue' }}/>
                <Text style={styles.subTitulo}>OU</Text>
                <Divider style={{ backgroundColor: 'blue' }}/>
            <View style={styles.cardContent}>
                <Divider style={{ backgroundColor: 'blue' }}/>
            </View>
            <TouchableOpacity style = {styles.button}><Text style={{color: 'white'}}>CADASTRE-SE</Text></TouchableOpacity>
          </View>
        );
    }


}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E6E8',
    },
    logo: {
        width: '60%',
        height: '20%',
        resizeMode : "contain",
        alignSelf: 'center',
        marginTop: -40,
        marginBottom: -30,
    },
    subTitulo: {
        textAlign: 'center',
        color: '#0B0D88',
        fontWeight: 'bold',
        paddingBottom: '5%',
    },
    titulo: {
        textAlign: 'center',
        color: '#F74B02',
        fontWeight: 'bold',
        paddingBottom: '3%',
        fontSize: 30,
    },
    seta: {
        marginTop: 30,
    },
    card: {
      marginLeft: 20,
      marginRight: 20,
      padding:20,
      borderStyle: 'solid',
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 30,
      shadowRadius: 2,
      backgroundColor: "white",
      marginBottom: '10%',
    },
    cardTitulo: {
      textAlign: 'left',
      color: '#F74B02',
      fontWeight: 'bold',
      fontSize: 25,
    },
    cardContent: {
      flexDirection: "row",
    },
    cardPrice: {
      textAlign: 'left',
      color: '#0B0D88',
      fontWeight: 'bold',
      marginTop: 35,
      fontSize: 22,
    },
    gas: {
      resizeMode : "center",
      flex: 0.4,
      height: 150,
      marginRight: 30
    },
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
    },
  });