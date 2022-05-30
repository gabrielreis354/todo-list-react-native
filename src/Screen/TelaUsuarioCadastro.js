/* eslint-disable prettier/prettier */
import {View, StyleSheet, Image } from 'react-native';
import
{
  Text,
  TextInput,
  Caption,
  Button,
  HelperText,
  Snackbar,
} from 'react-native-paper';
import React, { useState } from 'react';
import Banco from '../Database/TaskDatabase'
import User from '../Models/User'

export default function TelaLogin({navigation}) {
  //login consts
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [pass, setPass] = useState('');
  const [passDois, setPassDois] = useState('');
  //validation const
  const [snackbarText, setText] = useState('');
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const cadastrarUsuario = () => {
    const banco = new Banco();
    const newUser = new User(nome, email, pass);
    banco.CadastroUsuario(newUser);
    navigation.navigate('TelaUsuarioLogin');
  };

  const validation = () => {
    if (nome === '' || email === '' || pass === '') {
      setText('Preencha todos os campos corretamente');
      setVisible(true);
    } else if (email.includes('@') === false || email.includes('.com') === false) {
      setText('Forneça um endereço de email válido');
      setVisible(true);
    } else if (pass === '') {
      setText('Preencha o campo senha');
      setVisible(true);
    } else if (passDois === '') {
      setText('Preencha o campo de confirmação de senha');
      setVisible(true);
    } else if (pass.length < 6) {
      setText('Insira uma senha com pelo menos 6 digitos');
      setVisible(true);
    } else if (pass !== passDois) {
      setText('Senhas incompatíveis');
      setVisible(true);
    } else if (nome !== '' && email !== '' && pass !== '') {
      cadastrarUsuario();
    }
  };

  return (
    // TODO - Implementar SQlite para Validação de Login
    <View style={style.background}>
      <View style={style.wrapper}>
        <View style={style.imageWrapper}>
          <Image
            style={style.image}
            source={require('../Images/logo-julubi.png')}
          />
        </View>
        <View style={style.inputWrapper}>
          <TextInput
            style={style.input}
            label="Nome"
            value={nome}
            mode={'flat'}
            underlineColor={'#FFF'}
            activeUnderlineColor={'#0F5929'}
            onChangeText={text => setNome(text)}
          />
          <TextInput
            style={style.input}
            label="Email"
            value={email}
            mode={'flat'}
            textContentType="emailAddress"
            keyboardType={'email-address'}
            underlineColor={'#FFF'}
            activeUnderlineColor={'#0F5929'}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={[style.input, {color: 'whited'}]}
            label="Senha"
            value={pass}
            mode={'flat'}
            underlineColor={'#FFF'}
            activeUnderlineColor={'#0F5929'}
            onChangeText={text => setPass(text)}
            secureTextEntry={show}
            right={<TextInput.Icon name={'eye'} onPress={() => setShow(!show)} />}
          />
          <TextInput
            style={[style.input, {color: 'white'}]}
            label="Confirme sua senha"
            value={passDois}
            mode={'flat'}
            underlineColor={'#FFF'}
            activeUnderlineColor={'#0F5929'}
            onChangeText={text => setPassDois(text)}
            secureTextEntry={show}
            right={<TextInput.Icon name={'eye'} onPress={() => setShow(!show)} />}
          />
        </View>
        <View style={style.areaBtn}>
          <Button
            style={style.btn}
            color="#fff"
            labelStyle={{color: '#0F5929'}}
            mode="contained"
            onPress={() => validation()}
          >
            Crie uma conta
          </Button>
          <Caption style={style.caption} onPress={() => navigation.navigate('TelaUsuarioLogin')}>Já tem conta ?</Caption>
        </View>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Fechar',
          onPress: () => {
            // Do something
          },
        }}>
        {snackbarText}
      </Snackbar>
    </View>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: '#0F5929',
    minHeight: '100%',
  },
  imageWrapper: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
  },
  image: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 30,
    marginVertical: 10,
    color: 'green',
  },
  error: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    maxWidth: '80%',
    borderRadius: 8,
  },
  areaBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  btn: {
    // TouchableOpacity
    padding: 5,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 20,
    fontSize: 16,
  },
  caption: {
    color: '#fff',
    fontSize: 12,
  },
});