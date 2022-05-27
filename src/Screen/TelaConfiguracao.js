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

  export default function TelaTarefaCadastro({navigation}) {
    // function Cadastrar(nome, status, categoria, tarefa, conteudo, gravidade, data) {
    //   const newTask = new Task(
    //     nome,
    //     status,
    //     categoria,
    //     tarefa,
    //     conteudo,
    //     gravidade,
    //     data,
    //   );
    //   const banco = new TaskDatabase();
    //   // banco.Cadastrar(newTask);
    //   banco.Cadastrar(newTask);
    // }
    return (
      <View style={{backgroundColor: '#998D6A', height: 1000}}>
        <Text style={style.titulo}>Configuração</Text>
        <View style={style.areaBtn}>
            <TouchableOpacity
                style={style.btn}
                onPress={() => navigation.navigate('Cadastrar Local ou Tarefa')}
            >
                <Text style={style.btnText}>Cadastrar nova tarefa</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.btn}
                onPress={() => navigation.navigate('Suítes')}
            >
                <Text style={style.btnText}>Gerenciar Locais</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  const style = StyleSheet.create({
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
      color: '#fff',
    },
    areaBtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
        width: 160,
        height: 160,
        padding: 20,
        margin: 8,
        borderRadius: 36,
        backgroundColor: '#0F5929',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
      color: '#fff',
      fontSize: 16,
    },
  });