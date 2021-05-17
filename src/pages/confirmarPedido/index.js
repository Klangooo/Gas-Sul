import React, { Component } from 'react';
import RNPickerSelect from "react-native-picker-select"

import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from '../../../assets/logo.png';
import Gas1 from '../../../assets/propane.png';




export default class confirmarPedido extends Component {
    
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

            <RNPickerSelect //style={styles.dropdown}
                style={pickerStyle}
                placeholder={{label: 'Método de pagamento', value: '',}}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: "Débito", value: "debito" },
                    { label: "Crédito", value: "credito" },
                    { label: "Dinheiro", value: "dinheiro" },
                ]}
                //containerStyle={pickerStyle}
                
                //https://github.com/lawnstarter/react-native-picker-select/issues/100
                //  useNativeAndroidPickerStyle={false}
             />

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