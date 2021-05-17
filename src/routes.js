import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator(); //Cria um StackNavigator
import Login from './pages/Login'; //Importa o componente Login
import EscolheProduto from './pages/escolheProduto'; //Importa o componente EscolhePrdouto
import ConfirmarPedido from './pages/confirmarPedido'; //Importa o componente ConfirmarPedido
import Tela1 from './pages/Tela1'; //Importa o componente Tela1


export default function Rotas() { //Exporta para que possa ser "visto" no resto do aplicativo
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Tela1" component={Tela1} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Produtos" component={EscolheProduto} />
                <AppStack.Screen name="Confirmar" component={ConfirmarPedido} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}