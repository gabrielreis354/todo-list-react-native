/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TaskDatabase from '../Database/TaskDatabase';
import Task from '../Models/Task';

export default function TelaCategoria({navigation}) {
  const [getLista, setLista] = useState([]);

  const Listar = () => {
    const banco = new TaskDatabase();
    banco.ListarCategorias().then(listaReparos => {
      setLista(listaReparos);
    });
  };

  useEffect(() => {
    Listar();
  }, []);

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
        {
          getLista.map( (item) => (
            <View style={style.areaBtn}>
              <TouchableOpacity
                style={style.btn}
                onPress={() => navigation.navigate('Suítes')}>
                <Text style={style.btnText}>{item.tb02_categoria}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#998D6A',
    padding: 20,
  },
  wrapperCat: {
    display: 'flex',
    flexDirection: 'column',
  },
  titulo: {
    margin: 5,
    fontSize: 24,
    color: 'white',
  },
  areaBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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
    fontSize: 20,
    color: '#FFFFFF',
  },
});
