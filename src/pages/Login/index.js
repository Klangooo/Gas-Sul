import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import { Divider } from 'react-native-elements';

export default class escolheProduto extends Component {

    
    
    render() {
      const { goBack } = this.props.navigation;
        return(
          <View style={styles.container}>
            <TouchableOpacity 
              style = {styles.seta}
              onPress = {()=> goBack()}>
                <Feather name="chevron-left" size={38} color="#0B0D88" />
            </TouchableOpacity>
            <Image 
              source={Logo} 
              style={styles.logo} />
            <Text style={styles.subTitulo}>O seu Gás em casa</Text>
            <Text style={styles.titulo}>Bem-Vindo(a)!</Text>
            <View style={styles.card}>
            <Text style={styles.cardTitulo}>E-mail</Text>
            </View>
            <View style={styles.card}>
            <Text style={styles.cardTitulo}>Senha</Text>
            </View>
            <TouchableOpacity style = {styles.button}><Text style={{color: 'white'}}>ENTRE</Text></TouchableOpacity>
            <Text style={styles.subTitulo}>Esqueceu sua senha?</Text>
            <table>
              <tr><td><Divider style={styles.divider1}/></td> 
              <td><Text style={styles.subTitulo}>OU</Text></td>  
              <td><Divider style={styles.divider1}/></td> </tr>
            </table>
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
        paddingBottom: '10%',
        padding: 10,
    },
    titulo: {
        textAlign: 'center',
        color: '#F74B02',
        fontWeight: 'bold',
        paddingBottom: '10%',
        fontSize: 30,
    },
    seta: {
        marginTop: 30,
    },
    card: {
      marginLeft: 20,
      marginRight: 20,
      padding:5,
      borderStyle: 'solid',
      borderColor: "#0B0D88",
      borderWidth: 2,
      borderRadius: 15,
      shadowRadius: 0.5,
      backgroundColor: "#E5E6E8",
      marginBottom: '10%',
    },
    cardTitulo: {
      textAlign: 'left',
      color: '#766f79',
      fontWeight: 'bold',
      fontSize: 17,
      fontFamily: 'Arial, Helvetica, sans-serif',
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
      width: 8 },
      alignSelf: 'center',
    },
    divider1: {
      backgroundColor: '#0B0D88',
      width: 168,
      height: 2, 
    },
    divider2: {
      backgroundColor: '#0B0D88',
      width: -130, 
    },

  });