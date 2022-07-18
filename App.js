/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Code from './src/pages/code';
import Entry from './src/pages/entry';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Code" component={Code} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
