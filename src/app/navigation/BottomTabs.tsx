import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatsScreen from '../chat/ChatsScreen';
import MesPlantesScreen from '../plantes/MesPlantesScreen';
import AccueilScreen from '../accueil/AccueilScreen';
import ConseilsEntretienScreen from '../entretien/ConseilsEntretienScreen';
import GardeScreen from '../gardes/GardeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Chats':
              iconName = 'chatbubbles-outline';
              break;
            case 'Plantes':
              iconName = 'leaf-outline';
              break;
            case 'Accueil':
              iconName = 'home-outline';
              break;
            case 'Entretien':
              iconName = 'water-outline';
              break;
            case 'Gardes':
              iconName = 'calendar-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Plantes" component={MesPlantesScreen} />
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Entretien" component={ConseilsEntretienScreen} />
      <Tab.Screen name="Gardes" component={GardeScreen} />
    </Tab.Navigator>
  );
}
