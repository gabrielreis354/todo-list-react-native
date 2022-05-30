import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigators/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
