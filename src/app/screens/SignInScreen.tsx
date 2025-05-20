import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemedText } from '@/components/ThemedText';


type RootStackParamList = {
  SignIn: undefined;
  Accueil: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    navigation.navigate('Accueil');
  };

  return (
    <View style={styles.container}>
      <ThemedText onPress={handleLogin}>
        Sign In
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
