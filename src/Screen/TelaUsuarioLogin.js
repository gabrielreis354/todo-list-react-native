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
  const [pass, setPass] = useState('');
  //validation const
  const [snackbarText, setText] = useState('');
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const validation = () => {
    if (email.includes('@') === false || email.includes('.com') === false) {
      setText('Forneça um endereço de email válido');
      setVisible(true);
    }
  };

  const hasErrors = () => {
    return !email.includes('@');
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
            label="Email"
            value={email}
            mode={'flat'}
            textContentType="emailAddress"
            keyboardType={'email-address'}
            underlineColor={'#FFF'}
            activeUnderlineColor={'#0F5929'}
            onChangeText={text => setEmail(text)}
          />
          {/* <HelperText style={style.error} padding="normal" type="error" visible={visible}>
            Forneça um endererço de e-mail válido
          </HelperText> */}
          <View>
            <TextInput
              style={[style.input, {color: 'whited'}]}
              label="Senha"
              value={pass}
              mode={'flat'}
              underlineColor={'#FFF'}
              activeUnderlineColor={'#0F5929'}
              onChangeText={text => setPass(text)}
              secureTextEntry={show}
              right={<TextInput.Icon name={"eye"} onPress={() => setShow(!show)} />}
            />
            <Caption style={[style.caption, {marginLeft: 30}]} onPress={() => navigation.navigate('TelaUsuarioCadastro')}>Esqueceu sua senha ?</Caption>
          </View>
        </View>
        <View style={style.areaBtn}>
          <Button
            style={style.btn}
            color="#fff"
            labelStyle={{color: '#0F5929'}}
            mode="contained"
            onPress={validation}
          >
            Log-in
          </Button>
          <Caption style={style.caption} onPress={() => navigation.navigate('TelaUsuarioCadastro')}>Não tem cadastro ?</Caption>
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
