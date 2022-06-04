/* eslint-disable prettier/prettier */
import {ScrollView, View, StyleSheet, Image } from 'react-native';
import
{
  TextInput,
  Caption,
  Button,
  Snackbar,
} from 'react-native-paper';
import React, { useState } from 'react';
import Banco from '../Database/TaskDatabase';

export default function TelaRecuperaSenha({navigation}) {
  //Database consts
  const banco = new Banco();
  //update consts
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passDois, setPassDois] = useState('');
  //validation const
  const [snackbarText, setText] = useState('');
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const Recupera = () => {
    banco.AtualizarUsuario(email, pass).then(() => {
      setText('Senha Atualizada');
      setVisible(!show);
    });
  };

  const validation = () => {
    if ( email === '' || pass === '') {
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
    } else if ( email !== '' && pass !== '') {
      Recupera();
    }
  };

  return (
    // TODO - Implementar SQlite para Validação de Login
    <ScrollView style={style.background}>
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
            label="Informe seu endereço de e-mail"
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
            label="Nova senha"
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
            label="Confirme sua nova senha"
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
            onPress={validation}
          >
            Mudar Senha
          </Button>
          <Caption style={style.caption} onPress={() => navigation.navigate('TelaUsuarioLogin')}>Voltar</Caption>
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
    </ScrollView>
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
