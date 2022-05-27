import { Text, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
            <View style={styles.area}>
                <Text>◘</Text>
                <Text>Home</Text>
            </View>
            <View style={styles.area}>
                <Text>◘</Text>
                <Text>Buscar</Text>
            </View>
            <View style={styles.area}>
                <Text>◘</Text>
                <Text>Configuração</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0F5929'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    area: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
