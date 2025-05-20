import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import AccueilScreen from '../screens/AccueilScreen';

export type RootStackParamList = {
  SignIn: undefined;
  Accueil: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Accueil" component={AccueilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
