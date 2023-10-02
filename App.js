import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import personagens from './screens/chaves/personagens';
import detalhes from './screens/chaves/detalhes';
import bordoes from './screens/chaves/bordoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='personagens' component={personagens} options={{ title: 'Personagens' }} />
          <Stack.Screen name='detalhes' component={detalhes} options={{ title: 'Detalhes' }} />
          <Stack.Screen name='bordoes' component={bordoes} options={{ title: 'Bordões' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
