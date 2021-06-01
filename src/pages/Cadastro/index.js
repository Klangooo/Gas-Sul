import React, { Component } from 'react';
import { StyleSheet, ScrollView, Keyboard, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Cadastro extends Component {

    constructor(props) {
      super(props);
      this.state = {
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
      };
    }
    
    fazCadastro = async ()  => {
      var erro = null;
      if(this.state.senha == this.state.confirmarSenha){
        try{
          await AsyncStorage.setItem('@nome', this.state.nome)
          await AsyncStorage.setItem('@email', this.state.email)
          await AsyncStorage.setItem('@senha', this.state.senha)
          Keyboard.dismiss();
        } catch(e) {
          console.log(e)
        }

        let keys;
        keys = await AsyncStorage.getAllKeys();
        const valores = await AsyncStorage.multiGet(keys);

        try{
          await axios.post('https://webhook.site/3fb43af7-44c0-43d1-9671-a7bb24768d93', {valores})
        } catch (e) {
        console.log(e)
        erro = e;
        }
        if(erro == null) {
          this.props.navigation.navigate('Produtos')
        } else {
          console.log(erro)
          Alert.alert("Erro!", "FFfFfF");
        }
    }else{
      Alert.alert("Senha incorreta", "A sua senha não está igual à sua confrimação. Tente novamente!");
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
            <Text style={styles.titulo}>Registre-se</Text>
            <View style={styles.card}>

            <TextInput 
              value={this.state.nome}
              style = {styles.input}
              placeholder = 'Nome'
              onChangeText = {texto => this.setState({nome : texto})} 
            />

            </View>
            <View style={styles.card}>

            <TextInput 
              value={this.state.email}
              style = {styles.input}
              keyboardType= 'email-address'
              placeholder = 'E-mail'
              onChangeText = {texto => this.setState({email : texto})} 
            />

            </View>
            <View style={styles.card}>

            <TextInput 
              value={this.state.senha}
              style = {styles.input}
              placeholder = 'Senha'
              onChangeText = {texto => this.setState({senha : texto})}
              secureTextEntry={true}
            />

            </View>
            <View style={styles.card}>
            
            <TextInput 
              value={this.state.confirmarSenha}
              style = {styles.input}
              placeholder = 'Confirmar Senha'
              onChangeText = {texto => this.setState({confirmarSenha : texto})}
              secureTextEntry={true}
            />

            </View>
            <TouchableOpacity style = {styles.button} onPress = { this.fazCadastro }><Text style={{color: 'white'}}>REGISTRAR</Text></TouchableOpacity>
        </View>
        );
    }


}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E6E8',
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
      padding:5,
      borderStyle: 'solid',
      borderColor: "#0B0D88",
      borderWidth: 2,
      borderRadius: 15,
      shadowRadius: 2,
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
      marginRight: 30,
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