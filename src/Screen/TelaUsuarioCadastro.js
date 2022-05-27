/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Banco from '../Database/TaskDatabase';
import User from '../Models/User';

export default function TelaLogin({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  function CadastrarUsuario(nome, email, senha) {
    const banco = new Banco();
    const user = new User(nome, email, senha);
    banco.CadastroUsuario(user);
  }

  return (
    // TODO - Implementar SQlite para Cadastro de Usuario
    <View>
      <TextInput
        onChangeText={valorDigitado => setNome(valorDigitado)}
        placeholder="Nome"
        style={style.input}
      />
      <TextInput
        onChangeText={valorDigitado => setEmail(valorDigitado)}
        keyboardType="email-address"
        placeholder="Email"
        style={style.input}
      />
      <TextInput
        onChangeText={valorDigitado => setSenha(valorDigitado)}
        keyboardType="visible-password"
        placeholder="Senha"
        style={style.input}
      />
      <View style={style.areaBtn}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            CadastrarUsuario(nome, email, senha),
              navigation.navigate('TelaUsuarioLogin');
          }}>
          <Text style={style.btnText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  input: {
    margin: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  areaBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  btn: {
    // TouchableOpacity
    width: 170,
    padding: 10,
    margin: 50,
    borderRadius: 12,
    backgroundColor: '#0F5929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
