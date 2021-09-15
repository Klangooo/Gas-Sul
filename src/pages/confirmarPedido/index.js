import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import Gas1 from '../../../assets/propane.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default class confirmarPedido extends Component {

  constructor(props) {
    super(props);
    this.state = {
    flagDinheiro: null,
    troco: "00",
    nome: "",
    valor: 0,
    enedereco: '',
    pagamento: '',
    troco: '',
    };
  }

  componentDidMount = async () => {
    await this.setState({valor: await AsyncStorage.getItem('resultado')})
  }
 
enviaValores = async () => {
  var resultado = 0;
  var var_email = await AsyncStorage.getItem('2email') 
  var var_valor = await AsyncStorage.getItem('resultado') 
  var botijao1 = await AsyncStorage.getItem('numBotijao1')
  var botijao2 = await AsyncStorage.getItem('numBotijao2') 
  this.setState({nome: var_email})
  if(this.state.troco == ""){
    this.setState({troco:"00"})
  }
  var valores = [
    [
      "nome",
      this.state.nome
    ],
    [
      "botijao1",
      botijao1
    ],
    [
      "botijao2",
      botijao2
    ],
    [
      "valor",
      var_valor
    ],
    [
      "endereco",
      this.state.enedereco
    ],
    [
      "pagamento",
      this.state.pagamento
    ],
    [
      "troco",
      this.state.troco
    ],
  ]
  console.log(valores)
  try{
    await axios.post('http://quiet-tundra-36008.herokuapp.com/public/api/pedido',{valores})
    .then(function (response) {
      resultado = response.data
      console.log(resultado);
    });
  } catch (e) { //esse aqui retorna se der erro
  console.log(e) // tirar daqui pra baixo
  }
  if(resultado == "Pedido Cadastrado com sucesso") {
    Alert.alert("Sucesso!", "O seu pedido já foi registrado!");
  } else {
    Alert.alert("Erro!", "Houve algum problema em registrar seu pedido, tente novamente mais tarde.");
  }
} 

  pedeTroco = (value) =>  {
    this.setState({flagDinheiro : null})
    if(value == 'dinheiro') {
      this.setState({flagDinheiro : 1})
    } else {
      this.setState({troco : "00"})
    }
    this.setState({pagamento : value})
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

            <View style={styles.card}>
            <Text style={styles.cardTitulo}>Confirmar pedido:</Text>
            <View style={styles.cardContent}>
              <Image source={Gas1} 
              style={styles.gas} />
              <View style={styles.teste}>
              <Text style={styles.cardPrice}>R$ {this.state.valor}</Text>
              <TextInput 
              multiline
              numberOfLines={2}
              value={this.state.enedereco}
              style = {styles.inputEndereco}
              placeholder = 'Endereço de entrega'
              onChangeText = {texto => this.setState({enedereco : texto})} 
            />
              </View>
            </View>
            </View>
           
            <Text style={styles.titulo}>Qual será o método de pagamento?</Text>
            <View style={styles.pickerContainer}>
            <RNPickerSelect
              style={{	inputAndroid: {
                color: '#aba',
                justifyContent: 'center',
                textAlign: 'center',
                paddingHorizontal: 10,
                paddingVertical: 8,
                fontSize: 18,
              },

              }}
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => this.pedeTroco(value)}
              placeholder={{label: 'Método de pagamento', value: null}}
              items={[
                  { label: 'Cartão de crédito', value: 'credito' },
                  { label: 'Cartão de débito', value: 'debito' },
                  { label: 'Dinheiro', value: 'dinheiro' },
              ]}
              
            />
            </View>
            <View style={{flexDirection:"row", alignSelf:"center", marginBottom: 20}}>
            {this.state.flagDinheiro && <Text style={{textAlignVertical: "center", color:"#F74B02", fontSize:20, fontWeight:"bold", marginLeft:"auto"}}>Troco para R$ </Text>}
            {this.state.flagDinheiro && <TextInput 
              value={this.state.troco}
              style = {{     
              width: 'auto',
              padding: 8,
              borderColor: '#082d95',
              borderWidth: 1.5,
              borderRadius: 3,}}
              keyboardType= 'numeric'
              placeholder = '  '
              onChangeText = {texto => this.setState({troco : texto})} 
            />}
            
            </View> 
            <TouchableOpacity style = {styles.button} onPress = {this.enviaValores}><Text style={{color: 'white'}}>CONFIRMAR</Text></TouchableOpacity>
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
      marginBottom: 15,
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
        paddingTop: '5%',
    },
    titulo: {
        textAlign: 'center',
        color: '#F74B02',
        fontWeight: 'bold',
        paddingBottom: '3%',
        fontSize: 18,
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
    pickerContainer: {
      backgroundColor:"#0B0D88",
      padding: "2%",
      marginBottom: 15,
      marginTop: 10,
      marginRight: "20%",
      marginLeft: "20%",
      borderRadius: 300,
    
    },
    teste:{
      flex: 0.9,
    },
    inputEndereco: {
      padding: 8,
      borderColor: '#082d95',
      borderWidth: 1.5,
      borderRadius: 3,
    }
});
