/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {Component} from 'react';

export default function TelaCategoria({navigation}) {
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.titulo}>Página Inicial</Text>

        <View style={style.wrapper}>
          <View style={style.areaBtn}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate('TelaCategoria')}>
              <View style={style.areabotao}>
                <Icon name="kaaba" size={30} color="#FAC710" />
                <Text style={style.btnText}>Locais</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.areaBtn}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate('TelaListagem')}>
              <View style={style.areabotao}>
                <Icon
                  style={{margin: 8}}
                  name="check-square"
                  size={30}
                  color="#FAC710"
                />
                <Text style={style.btnText}>Prontos</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.areaBtn}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate('TelaListagem')}>
              <View style={style.areabotao}>
                <Icon name="exclamation-triangle" size={30} color="#FAC710" />
                <Text style={style.btnText}>Precisam de manutenção</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: '#998D6A',
  },
  titulo: {
    margin: 25,
    fontSize: 24,
    color: 'white',
  },
  areaBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  areabotao: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    width: 220,
    height: 220,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 50,
    paddingRight: 50,
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
