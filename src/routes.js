import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createStackNavigator(); //Cria um StackNavigator
import EscolheProduto from './pages/escolheProduto'; //Importa o componente EscolhePrdouto


export default function Rotas() { //Exporta para que possa ser "visto" no resto do aplicativo
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Escolhe Produto" component={EscolheProduto} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}