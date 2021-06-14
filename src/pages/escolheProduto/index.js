import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import Gas1 from '../../../assets/propane.png';
import NumericInput from 'react-native-numeric-input';
import axios from 'axios';

export default class escolheProduto extends Component {

  constructor(props) {
    super(props);
    this.state = {
    preco1: "Carregando...",
    preco2: "Carregando...",
    falg: null,
    };
  }

  componentDidMount = async () => {
    var resultado = 0;
    try{
      await axios.get('https://webhook.site/54cf1a41-db6e-4542-b57a-6f52835e6bb2')
      .then(function (response) {
        resultado = JSON.stringify(response.data)
        console.log(resultado);
      });
    } catch (e) {
    console.log(e)
    }
    await this.setState({preco1 : resultado})
    console.log(this.state.preco1)
    await this.setState({preco2 : resultado})
    await this.setState({flag : 1})
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
            <Text style={styles.titulo}>Escolha seu produto</Text>
            {!this.state.flag && <ActivityIndicator style={{flex: 1, flexDirection: 'row'}} size="large" color="#0B0D88" />}
            {this.state.flag && <View style={styles.card}>
            <Text style={styles.cardTitulo}>GLP x litros</Text>
            <View style={styles.cardContent}>
              <Image source={Gas1} 
              style={styles.gas} />
              <View style={styles.cardContentColuna}>
              <Text style={styles.cardPrice}>{this.state.preco1}</Text>
              <NumericInput
                textColor='#0B0D88'
                iconStyle={{ color: '#F74B02' }}
                borderColor= 'black' 
                rightButtonBackgroundColor='#white' 
                leftButtonBackgroundColor='white'
                totalWidth={120}
                rounded= 'true'
                separatorWidth= {0}
                onChange={value => console.log(value)} />
              </View>
            </View>
            </View>}
            {this.state.flag && <View style={styles.card}>
            <Text style={styles.cardTitulo}>GLP x litros</Text>
            <View style={styles.cardContent}>
              <Image source={Gas1} 
              style={styles.gas} />
              <View style={styles.cardContentColuna}>
              <Text style={styles.cardPrice}>{this.state.preco2}</Text>
              <NumericInput 
                textColor='#0B0D88' 
                iconStyle={{ color: '#F74B02' }}
                borderColor= 'black' 
                rightButtonBackgroundColor='#white' 
                leftButtonBackgroundColor='#white'
                totalWidth={120}
                rounded= 'true'
                separatorWidth= {0}
                onChange={value => console.log(value)} />
              </View>
            </View>
            </View>}
            {this.state.flag && <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Confirmar') }><Text style={{color: 'white'}}>CONFIRMAR</Text></TouchableOpacity>}
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
    contador: {
      backgroundColor: "red"
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
    cardContentColuna: {
      flexDirection: "column",
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