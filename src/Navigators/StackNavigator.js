/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import TelaUsuarioLogin from '../Screen/TelaUsuarioLogin';
import TelaUsuarioCadastro from '../Screen/TelaUsuarioCadastro';
import TelaInicial from '../Screen/TelaInicial';
import TelaCategoria from '../Screen/TelaCategoria';
import TelaListagem from '../Screen/TelaListadeSuites';
import TelaReparos from '../Screen/TelaReparos';
import TelaCadastro from '../Screen/TelaCadastro';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TelaUsuarioLogin"
        component={TelaUsuarioLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TelaUsuarioCadastro"
        component={TelaUsuarioCadastro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TelaInicial"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TelaCategoria"
        component={TelaCategoria}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Suítes" component={TelaListagem} />
      <Stack.Screen
        name="Local"
        component={TelaReparos}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Cadastrar Local ou Tarefa" component={TelaCadastro} />
    </Stack.Navigator>
  );
}
