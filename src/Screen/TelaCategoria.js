/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TaskDatabase from '../Database/TaskDatabase';
import TelaReparos from './TelaReparos';
import Task from '../Models/Task';

export default function TelaCategoria({navigation}) {
  const [name, setName] = useState('default');
  const banco = new TaskDatabase();
  // const Listar = () => {
  //   banco.Listar().then(listaReparos => {
  //     setLista(listaReparos);
  //   });
  // };
  // useEffect(() => {
  //   handleChange();
  // });

  // function renderItem({item}) {
  //   return (
  //     <View style={style.areaBtn}>
  //       <TouchableOpacity
  //         style={style.btn}
  //         onPress={() => navigation.navigate('Suítes')}>
  //         <Text style={style.btnText}>{item.tb02_categoria}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={style.container}>
      <Text style={style.titulo}>Tarefas</Text>
      {/* <FlatList
        data={getLista}
        renderItem={item => renderItem(item)}
        key={item => item.tb02_id}
        initialNumToRender={2}
      /> */}
      <View style={style.wrapperCat}>
        <View style={style.areaBtn}>
          <TouchableOpacity
            style={style.btn}
            value={name}
            onPress={() => navigation.navigate('TelaReparosSuites')}>
            <Text style={style.btnText}>Suítes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btn}
            value={name}
            onPress={() => console.log('funcional')}>
            <Text style={style.btnText}>Salões</Text>
          </TouchableOpacity>
        </View>
        <View style={style.areaBtn}>
          <TouchableOpacity
            style={style.btn}
            value={name}
            onPress={() => console.log('funcional')}>
            <Text style={style.btnText}>Bar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btn}
            value={name}
            onPress={() => console.log('funcional')}>
            <Text style={style.btnText}>Churrasqueira</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#AEA17B',
    padding: 20,
  },
  titulo: {
    margin: 5,
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btn: {
    float: 'left',
    width: '45%',
    height: 160,
    borderRadius: 36,
    backgroundColor: '#0F5929',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
