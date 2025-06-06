import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation'; 

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    // Navigue vers le Tab.Navigator (MainApp) qui contient Accueil
    navigation.navigate('MainApp');
  };

  const handleRegister = () => {
    // navigation.navigate('Inscription'); // à activer quand la route existera
  };

  return (
    <ImageBackground
      source={require('@/../assets/images/background.jpeg')}
      style={styles.background}
    >
      {/* Logo container */}
      <View style={styles.logoContainer}>
        <Image source={require('@/../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Login form */}
      <View style={styles.loginBox}>
        <Text style={styles.title}>Identification</Text>
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#666" />
        <TextInput
          placeholder="Mot de passe"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#666"
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerLink}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  logo: {
    width: 200,
    height: 120,
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    width: '85%',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#617973',
  },
  input: {
    width: '100%',
    backgroundColor: '#a0d4af',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center'
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: '#a0d4af',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
  },
});
