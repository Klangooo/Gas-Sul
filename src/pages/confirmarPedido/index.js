import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import Gas1 from '../../../assets/propane.png';



export default class confirmarPedido extends Component {

 
componentDidMount = async () => {
  
  var var_email = await AsyncStorage.getItem('2email') 
  this.setState({nome: var_email})
  var valores = [
    [
      "nome",
      this.state.nome
    ],[
      "troco",
      this.state.troco
    ],

  ]
  try{
    await axios.post('http:quiet-tundra-36008.herokuapp.com/public/api/pedido',{valores})
    .then(function (response) {
      resultado = JSON.stringify(response.data)
      console.log(resultado);
    });
  } catch (e) { //esse aqui retorna se der erro
  console.log(e) // tirar daqui pra baixo
  }
} 

    
  constructor(props) {
    super(props);
    this.state = {
    flagGeral: null,
    flagDinheiro: null,
    troco: "0",
    nome: "",
    botijao1:'', // tem que ser os dados que o back espera //
    botijao2: '', 
    valor: '',
    enedereco: '',
    pagamento: '',
    troco: '',
    };
  }

  pedeTroco = (pagamento) =>  {
    this.setState({flagGeral : 1})
    if(pagamento == 'dinheiro') {
      this.setState({flagDinheiro : 1})
    } else {
      console.log("não é dinheiro")
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

            <View style={styles.card}>
            <Text style={styles.cardTitulo}>GLP x litros</Text>
            <View style={styles.cardContent}>
              <Image source={Gas1} 
              style={styles.gas} />
              <Text style={styles.cardPrice}>R$ XX,XX</Text>
            </View>
            </View>
           
            <Text style={styles.titulo}>Qual será o método de pagamento?</Text>
            <View>
              <DropDownPicker //arrumar outro trem desse
                
                items={[
                  {label: 'Cartão de Débito', value: 'debito'},
                  {label: 'Cartão de Crédito', value: 'credito'},
                  {label: 'Dinheiro', value: 'dinheiro'},
                ]}
                defaultNull
                placeholder="Método de pagamento"

                defaultIndex={0}
                onChangeItem={item => this.pedeTroco(item.value)}

                dropDownStyle={{
                  backgroundColor: 'red',
                  marginTop: 2,
                }}

                containerStyle={{
                  width: 150,
                  height: 70,
                  alignSelf: 'center'
                }}

                itemStyle={{
                  alignItems: 'flex-start'
                }}

                labelStyle={{
                  fontSize: 14, color: '#000'
                }}

                placeholderStyle={{
                  fontWeight: 'bold'
                }}
              />
            </View>
            <View>
            <Text style={styles.titulo}>Caso precise de troco, digite na caixa abaixo:</Text>
            <TextInput 
              value={this.state.troco}
              style = {styles.input}
              keyboardType= 'numeric'
              placeholder = '$'
              onChangeText = {texto => this.setState({troco : texto})} 
            />
            
            </View> {/*this.state.flagGeral && */}

             <TouchableOpacity style = {styles.button}><Text style={{color: 'white'}}>CONFIRMAR</Text></TouchableOpacity>
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
        paddingTop: 20,
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
    dropdown: {
        paddingTop: 20,
        backgroundColor: "red",
        width: "60%",
    }
  });

  const pickerStyle = {
	inputIOS: {
		color: 'white',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'white',
	},
	placeholderColor: 'white',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'relative',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
        paddingHorizontal: 20,
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};