import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import { Divider } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    email: "",
    senha: "",
    };
  }

  fazLogin = async ()  => {
    await AsyncStorage.clear();
    var erro = null;
      try{
        await AsyncStorage.setItem('2email', this.state.email)
        await AsyncStorage.setItem('3senha', this.state.senha)
        Keyboard.dismiss();
      } catch(e) {
        console.log(e)
      }

      let keys;
      keys = await AsyncStorage.getAllKeys();
      const valores = await AsyncStorage.multiGet(keys);
      console.log(valores)

      var resultado = 0;
      try{
        await axios.post('http://quiet-tundra-36008.herokuapp.com/public/api/loginapp', {valores})
        .then(function (response) {
          resultado = JSON.stringify(response.data)
          console.log(resultado)
        })
      } catch (e) {
      console.log(e)
      erro = e;
      }
      if(erro == null && resultado == '"Logado com sucesso"') {
        this.props.navigation.navigate('Produtos')
      } else {
        console.log(erro)
        Alert.alert("Dados incorretos.", "Tente revisar os dados inseridos.");
      }
  }
    
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
            <View >
            <TextInput 
              value={this.state.email}
              style={styles.card}
              keyboardType= 'email-address'
              placeholder = 'E-mail'
              onChangeText = {texto => this.setState({email : texto})} 
            />
            </View>
            <View >
            <TextInput 
              value={this.state.senha}
              style={styles.card}
              placeholder = 'Senha'
              onChangeText = {texto => this.setState({senha : texto})}
              secureTextEntry={true}
            />
            </View>
            <TouchableOpacity style = {styles.button} onPress = { this.fazLogin }><Text style={{color: 'white'}}>ENTRE</Text></TouchableOpacity>
            <Text style={styles.subTitulo}>Esqueceu sua senha?</Text>
            <Divider style={styles.divider1}/>
            <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Cadastro') }><Text style={{color: 'white'}}>CADASTRE-SE</Text></TouchableOpacity>
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
      height: 2,
      margin: 10 
    },
    input: { //Caixa do Formulário
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
      padding: 8,
      borderColor: '#082d95',
      borderWidth: 1.5,
      borderRadius: 3,
    },

  });