/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaUsuarioLogin from '../Screen/TelaUsuarioLogin';
import TelaUsuarioCadastro from '../Screen/TelaUsuarioCadastro';
import TelaCategoria from '../Screen/TelaCategoria';
import TelaReparos from '../Screen/TelaReparos';

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
        name="TelaCategoria"
        component={TelaCategoria}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Local"
        component={TelaReparos}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
