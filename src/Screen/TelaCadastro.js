/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Button,
  TextInput,
  Snackbar,
  Title,
} from 'react-native-paper';

import React, {useState, useEffect} from 'react';
import TaskDatabase from '../Database/TaskDatabase';
import Task from '../Models/Task';
import NotificationManager from '../services/NotificationManager';

export default function TelaCadastro(props) {
  //snackbar consts
  const [snackbarText, setText] = useState('');
  const onDismissSnackBar = () => setVisible(false);
  //modal consts
  const [titulo, setTitulo] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [image, setImage] = useState();
  const [data, setData] = useState();
  //task const
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  //notificattor consts
  const notificator = new NotificationManager();

  const getImage = () => {
    const banco = new TaskDatabase();
    setImage(banco.GetDataUri());
  };

  const novaTarefa = () => {
    const banco = new TaskDatabase();
    const newTask = new Task(titulo, local, descricao, image, data);
    banco.CadastrarSuite(newTask);
  };

  const validation = () => {
    if (titulo === '' || local === '' || descricao === '' || image === '' || data === '') {
      setText('Preencha todos os campos corretamente');
      showDialog;
    } else if (titulo === '') {
      setText('Preencha o campo titulo');
      showDialog;
    } else if (local === '') {
      setText('Preencha o campo local');
      showDialog;
    } else if (descricao === '') {
      setText('Preencha o campo descricao');
      showDialog;
    } else if (image === '') {
      setText('Preencha o campo image');
      showDialog;
    } else if (data === '') {
      setText('Preencha o campo data');
      showDialog;
    } else {
      novaTarefa();
      mandarNotificacao();
    }
  };

  useEffect(() => {
    getImage();
    notificator.configure();
    notificator.createChannel();
  });

  const mandarNotificacao = () => {
    notificator.showNotification(
      1, //id
      'Nova Tarefa',  //title
      'Tarefa adicionada em Suítes',// message
      {}, //data
      {} //options
    );
  };


  return (
    <ScrollView style={styles.container}>
     <Title style={styles.title}>Cadastrar nova tarefa</Title>
      <View style={styles.wrapperTarefas}>
        <TextInput
          style={styles.textInput}
          label="Titulo da tarefa"
          value={titulo}
          onChangeText={text => setTitulo(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Local"
          value={local}
          onChangeText={text => setLocal(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Descrição"
          multiline={true}
          numberOfLines={2}
          value={descricao}
          onChangeText={text => setDescricao(text)}
        />
        <TextInput
          style={styles.textInput}
          label="Imagem"
          value={image}
          onChangeText={text => setImage(text)}
          right={<TextInput.Icon name="camera" onPress={() => props.navigator.navigate('Camera')}/>}
        />
        <TextInput
          style={styles.textInput}
          label="Data"
          value={data}
          onChangeText={text => setData(text)}
        />
        <View style={styles.areabotao}>
          <Button
            style={styles.btn}
            color="#0F5929"
            labelStyle={{color: '#fff'}}
            mode="contained"
            onPress={validation}
          >
            Cadastrar
          </Button>
        </View>
      </View>
      <Snackbar
        style={styles.snackbar}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Fechar',
          onPress: () => {
            hideDialog;
          },
        }}>
        {snackbarText}
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AEA17B',
    height: '100%',
  },
  wrapperTitle: {
    display: 'flex',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0F5929',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
  },
  title: {
    margin: 5,
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
    color: '#0f5929',
  },
  subtitle: {
    margin: 5,
    fontSize: 24,
    color: 'white',
  },
  btn: {
    padding: 5,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 20,
    fontSize: 16,
  },
  wrapperTarefas: {
    margin: 30,
    fontSize: 14,
  },
  titleCard: {
    color: '#fff',
    fontSize: 16,
  },
  paragraph: {
    color: '#fff',
    fontSize: 14,
  },
  textInput: {
    margin: 5,
  },
  snackbar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  areabotao: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
