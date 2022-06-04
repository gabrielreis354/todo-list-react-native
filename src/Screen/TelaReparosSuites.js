/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  FAB,
  Button,
  Dialog,
  Portal,
  TextInput,
  Snackbar,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

import React, {useState, useEffect} from 'react';
import TaskDatabase from '../Database/TaskDatabase';
import Task from '../Models/Task';

export default function TelaReparosSuites({navigation}) {
  //modal consts
  const [titulo, setTitulo] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [image, setImage] = useState();
  const [data, setData] = useState();
  //task const
  const [lista, setLista] = useState([]);

  const Listar = () => {
    const banco = new TaskDatabase();
    banco.ListarSuites().then(listaReparos => {
      setLista(listaReparos);
    });
  };

  const getImage = () => {
    const banco = new TaskDatabase();
    setImage(banco.GetDataUri());
  };

  const novaTarefa = () => {
    const banco = new TaskDatabase();
    const newTask = new Task(titulo, local, descricao, image, data);
    banco.CadastrarSuite(newTask).then(() => Listar);
  };

  // const validation = () => {
  //   if (titulo === '' || local === '' || descricao === '' || image === '' || data === '') {
  //     setText('Preencha todos os campos corretamente');
  //     showDialog;
  //   } else if (titulo === '') {
  //     setText('Preencha o campo titulo');
  //     showDialog;
  //   } else if (local === '') {
  //     setText('Preencha o campo local');
  //     showDialog;
  //   } else if (descricao === '') {
  //     setText('Preencha o campo descricao');
  //     showDialog;
  //   } else if (image === '') {
  //     setText('Preencha o campo image');
  //     showDialog;
  //   } else if (data === '') {
  //     setText('Preencha o campo data');
  //     showDialog;
  //   } else {
  //     novaTarefa();
  //   }
  // };

  useEffect(() => {
    Listar();
    getImage();
  }, [image]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Suítes</Text>
        <Text style={styles.subtitle}>{lista.length}</Text>
      </View>
      <View style={styles.wrapperTarefas}>
        {
          lista.map(
            (item) => (
              <Card style={{margin: 10, backgroundColor: '#FFF'}} key={item.tb02_id}>
                <Card.Content>
                  <View style={styles.wrapperTitle}>
                    <Title style={styles.titleCard}>{item.tb02_local}</Title>
                    <Paragraph style={{color: '#fff'}}>{item.tb02_data}</Paragraph>
                  </View>
                  <Paragraph style={styles.paragraph}>{item.tb02_titulo}</Paragraph>
                  <Paragraph style={styles.paragraph}>{item.tb02_descricao}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.tb02_imagem}} />
                <Card.Actions style={styles.areabotao}>
                  <Button mode="contained" color="#0f5929" onPress={console.log('Pressed')}>Enviar</Button>
                </Card.Actions>
              </Card>
            ),
          )
        }
      </View>
      {/*
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Nova Tarefa</Dialog.Title>
              <Dialog.Content>
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
                  right={<TextInput.Icon name="camera" onPress={() => navigation.navigate('Camera')}/>}
                />
                <TextInput
                  style={styles.textInput}
                  label="Data"
                  value={data}
                  onChangeText={text => setData(text)}
                />
              </Dialog.Content>
              <Dialog.Actions style={styles.areabotao}>
                <Button mode="contained" onPress={validation}>Enviar</Button>
                <Button onPress={hideDialog}>Fechar</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      */}
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
    fontSize: 24,
    color: 'white',
  },
  subtitle: {
    margin: 5,
    fontSize: 24,
    color: 'white',
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
    color: '#000',
    fontSize: 14,
  },
  textInput: {
    margin: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#0f5929',
  },
  areabotao: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
