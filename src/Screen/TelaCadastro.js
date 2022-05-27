/* eslint-disable prettier/prettier */
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import TaskDatabase from '../Database/TaskDatabase';
import Task from '../Models/Task';

export default function TelaTarefaCadastro() {


  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [gravidade, setGravidade] = useState('');
  const [data, setData] = useState('');


  function Cadastrar(nome, status, categoria, tarefa, conteudo, gravidade, data) {
    const newTask = new Task(
      nome,
      status,
      categoria,
      tarefa,
      conteudo,
      gravidade,
      data,
    );
    const banco = new TaskDatabase();
    // banco.Cadastrar(newTask);
    banco.Cadastrar(newTask);
  }

  return (
    // TODO - Implementar SQlite para Cadastro de Tarefas
    <View style={{backgroundColor: '#998D6A', height: 1000}}>
      <Text style={styles.titulo}>Cadastrar nova tarefa ou local</Text>

      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setNome(valorDigitado);
        }}
        placeholder="Nome do Local"
      />
      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setStatus(valorDigitado);
        }}
        placeholder="Status do Local"
      />
      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setCategoria(valorDigitado);
        }}
        placeholder="Categoria do Local"
      />
      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setTarefa(valorDigitado);
        }}
        placeholder="Tarefa"
      />
      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setConteudo(valorDigitado);
        }}
        placeholder="Conteúdo da Tarefa"
      />
      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setGravidade(valorDigitado);
        }}
        placeholder="Gravidade da Tarefa"
      />
      <TextInput
        style={styles.input}
        onChangeText={valorDigitado => {
          setData(valorDigitado);
        }}
        placeholder="Data da Tarefa"
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            Cadastrar(
              nome,
              status,
              categoria,
              tarefa,
              conteudo,
              gravidade,
              data,
            )
          }>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 8,
    padding: 10,
    borderRadius: 12,
  },
  titulo: {
    margin: 10,
    fontSize: 24,
    color: '#000',
  },
  areaBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    width: 150,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
});
