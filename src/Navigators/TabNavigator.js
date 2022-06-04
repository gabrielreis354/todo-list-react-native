/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Button, Title, Paragraph} from 'react-native-paper';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import {View} from 'react-native';

import TelaReparosSuites from '../Screen/TelaReparosSuites';
import TelaCadastro from '../Screen/TelaCadastro';

export default function TabNavigator(props) {
  return (
    <Tabs
      style={{ backgroundColor:'#0f5929', color:'#fff'}}
    >
      <TabScreen label="Listagem" icon="view-list">
        <TelaReparosSuites />
      </TabScreen>
      <TabScreen label="Cadastro" icon="playlist-edit">
        <TelaCadastro navigator={props.navigator}/>
      </TabScreen>
    </Tabs>
  );
}
