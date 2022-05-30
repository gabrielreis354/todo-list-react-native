/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';
import { FAB } from 'react-native-paper';
import React, {Component} from 'react';
import TaskDatabase from '../Database/TaskDatabase';

export default class TelaReparos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      lista: [],
    };
    // this.Listar();
  }

  Listar = () => {
    const banco = new TaskDatabase();
    banco.Listar().then(listaReparos => {
      this.setState({lista: listaReparos});
    });
  };

  setTitle = (title) => {
    this.setState({title: title});
  };
  //TODO - FAZER POR sqlite AS TAREFAS E REPRODUZIR ELAS EM TAREFAS PARA AO USUARIO VER
  //todo - IMPLENTAR FUNCIONALIDADE DE LOCAL CONCLUIDO
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        {/* <View style={styles.wrapperTarefas}>
          {this.state.lista.map(
            item => (
              (<Text>Nome: {item.nome}</Text>),
              (<Text>Status: {item.status}</Text>),
              (<Text>Categoria: {item.categoria}</Text>),
              (<Text>Tarefa: {item.tarefa}</Text>),
              (<Text>Conteúdo: {item.conteudo}</Text>),
              (<Text>Gravidade: {item.gravidade}</Text>),
              (<Text>Conteúdo: {item.data}</Text>)
            ),
          )}
        </View> */}
        <FAB
          style={styles.fab}
          color="white"
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AEA17B',
    height: '100%',
  },
  title: {
    color: '#000',
    fontSize: 16,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  wrapperTarefas: {
    margin: 30,
    fontSize: 14,
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
