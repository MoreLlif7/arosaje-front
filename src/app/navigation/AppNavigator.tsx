import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import SignInScreen from '../auth/SignInScreen';
import BottomTabs from './BottomTabs';
import ChatDetailScreen from '../chat/ChatDetailScreen';
import DemandeGardeScreen from '../gardes/DemandeGardeScreen';
import AjouterPlanteScreen from '../plantes/AjouterPlanteScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="MainApp" component={BottomTabs} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
      <Stack.Screen name="DemandeGarde" component={DemandeGardeScreen} />
      <Stack.Screen name="AjouterPlante" component={AjouterPlanteScreen} />
    </Stack.Navigator>
  );
}
