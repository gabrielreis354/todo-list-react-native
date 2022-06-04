/* eslint-disable prettier/prettier */
import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function CustomNavigationBar({ navigation, back }) {
    return (
        <Appbar.Header style={{backgroundColor: '#0f5929'}}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content color="#fff" title="Julubi Tarefas" />
        </Appbar.Header>
    );
};