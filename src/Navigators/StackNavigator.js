/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CustomNavigationBar from '../Components/CustomNavigationBar';
import TelaUsuarioLogin from '../Screen/TelaUsuarioLogin';
import TelaUsuarioCadastro from '../Screen/TelaUsuarioCadastro';
import TelaRecuperaSenha from '../Screen/TelaRecuperaSenha';
import TelaCategoria from '../Screen/TelaCategoria';
import TelaTarefa from '../Screen/TelaReparos';
import TabNavigator from './TabNavigator';
import Camera from '../Components/Camera/Camera';
import NotificationManager from '../services/NotificationManager';

const Stack = createStackNavigator();
const notificator = new NotificationManager();

export default function StackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      header: (props) => <CustomNavigationBar {...props} />,
    }}>
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
        name="TelaRecuperaSenha"
        component={TelaRecuperaSenha}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TelaCategoria"
        component={TelaCategoria}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Local"
        component={TelaTarefa}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TelaReparosSuites">
        {
          ({navigation}) => {
            notificator.setNavegador(navigation);
            return (
              <TabNavigator navigator={navigation}/>
            );
          }
        }
      </Stack.Screen>
      <Stack.Screen
        name="Camera"
        component={Camera}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
