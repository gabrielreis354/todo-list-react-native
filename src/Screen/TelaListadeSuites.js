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
    // TODO - Implementar SQlite e Flatlist para Listagem das Local
    <ScrollView>
      <View style={style.container}>
        <View style={style.wrapper}>
          <View style={style.areaBtn}>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 1'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#10612c" />
                <Text style={style.btnText}>Suíte 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 2'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#FAC710" />
                <Text style={style.btnText}>Suíte 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 3'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#a30f0f" />
                <Text style={style.btnText}>Suíte 3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 4'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#FAC710" />
                <Text style={style.btnText}>Suíte 4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 5'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#10612c" />
                <Text style={style.btnText}>Suíte 5</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.areaBtn}>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 1'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#10612c" />
                <Text style={style.btnText}>Suíte 6</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 2'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#FAC710" />
                <Text style={style.btnText}>Suíte 7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 3'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#a30f0f" />
                <Text style={style.btnText}>Suíte 8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 4'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#FAC710" />
                <Text style={style.btnText}>Suíte 9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              suite={'Suíte 5'}
              onPress={() => navigation.navigate('Local')}>
              <View style={style.areabotao}>
                <Icon name="door-closed" size={30} color="#10612c" />
                <Text style={style.btnText}>Suíte 10</Text>
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
  areaBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  areabotao: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 8,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
