/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screen/TelaInicial';
import TelaCategoria from '../Screen/TelaCategoria';
import TelaConfig from '../Screen/TelaConfiguracao';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      options={{headerShown: false}}
      screenOptions={{
        tabBarActiveTintColor: '#0F5929',
        barStyle: {backgroundColor: '#095162'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* TODO - Implementar nova tela onde estarão as tarefas a serem cadastradas */}
      <Tab.Screen
        name="Locais"
        component={TelaCategoria}
        options={{
          headerShown: false,
          tabBarLabel: 'Lista de Tarefas',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cadastro"
        component={TelaConfig}
        options={{
          headerShown: false,
          tabBarLabel: 'Configuração',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pencil" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
