import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Import des écrans
import SignInScreen from '../auth/SignInScreen';
import AccueilScreen from '../accueil/AccueilScreen';
import MesPlantesScreen from '../plantes/MesPlantesScreen';
import AjouterPlanteScreen from '../plantes/AjouterPlanteScreen';
import DetailPlanteScreen from '../plantes/DetailPlanteScreen';
import DemandeGardeScreen from '../gardes/DemandeGardeScreen';
import ListeGardesScreen from '../gardes/ListeGardesScreen';
import GardesDemandeesScreen from '../gardes/GardesDemandeesScreen';
import GardeScreen from '../gardes/GardeScreen';
import ConseilsEntretienScreen from '../entretien/ConseilsEntretienScreen';
import ChatsScreen from '../chat/ChatsScreen';
import ChatDetailScreen from '../chat/ChatDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="MesPlantes" component={MesPlantesScreen} />
        <Stack.Screen name="AjouterPlante" component={AjouterPlanteScreen} />
        <Stack.Screen name="DetailPlante" component={DetailPlanteScreen} />
        <Stack.Screen name="DemandeGarde" component={DemandeGardeScreen} />
        <Stack.Screen name="ListeGardes" component={ListeGardesScreen} />
        <Stack.Screen name="GardesDemandees" component={GardesDemandeesScreen} />
        <Stack.Screen name="Garde" component={GardeScreen} />
        <Stack.Screen name="ConseilsEntretien" component={ConseilsEntretienScreen} />
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
