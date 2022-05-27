/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import TaskDatabase from '../Database/TaskDatabase';

export default class TelaReparos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
    this.Listar();
  }

  Listar = () => {
    const banco = new TaskDatabase();
    banco.ListarReparos().then(listaReparos => {
      this.setState({lista: listaReparos});
    });
  };
  //TODO - FAZER POR sqlite AS TAREFAS E REPRODUZIR ELAS EM TAREFAS PARA AO USUARIO VER
  //todo - IMPLENTAR FUNCIONALIDADE DE LOCAL CONCLUIDO
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Suíte 1</Text>

        <View style={styles.wrapperTarefas}>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#998D6A',
    height: 1000,
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
  areabotao: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
