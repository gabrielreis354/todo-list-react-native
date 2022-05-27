import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Banco from '../Database/TaskDatabase'
import User from '../Models/User'

export default function TelaLogin({navigation}) {

  state = {
    email: "",
    senha: ""
  }

  return (
    // TODO - Implementar SQlite para Validação de Login
    <View>
      <TextInput onChangeText={(valorDigitado) => this.state.email = valorDigitado} placeholder="Email" style={style.input} />
      <TextInput onChangeText={(valorDigitado) => this.state.email = valorDigitado} placeholder="Senha" style={style.input} />
      <View style={style.areaBtn}>
          <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('TelaInicial')}>
              <Text style={style.btnText}>Login</Text>
          </TouchableOpacity>
          <Text onPress={() => navigation.navigate('TelaUsuarioCadastro')}>Não tem cadastro ? Cadastre aqui</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({

    input: {
      margin: 12,
      padding: 8,
      borderWidth: 1,
      borderColor: '#ccc'
    },
    areaBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 300
    },
    btn: {
        // TouchableOpacity
        width: 170,
        padding: 10,
        margin: 50,
        borderRadius: 12, 
        backgroundColor: "#0F5929",
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
      fontSize: 16,
      color: '#FFFFFF',
    },

})
