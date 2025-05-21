import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AjouterPlanteScreen() {
  const [step, setStep] = useState(1);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [idPlante, setIdPlante] = useState('');
  const [pictureUrl, setPictureUrl] = useState<string | null>(null); // url photo après upload

  // Étape 1 : Prendre la photo
  const prendrePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission refusée", "L'accès à la caméra est requis.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      envoyerPhoto(result.assets[0].base64!);
    }
  };

  // Étape 1 : Envoyer photo en base64
  const envoyerPhoto = async (base64: string) => {
    try {
      const response = await fetch('http://192.168.85.239:8000/api/pictures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          picture: `data:image/jpeg;base64,${base64}`,
          plants: 'https://example.com/', // à adapter si nécessaire
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // suppose que l'API renvoie la clé 'pictureUrl' dans la réponse
        setPictureUrl(data.pictureUrl || null);
        Alert.alert('Succès', 'Photo envoyée avec succès ✅');
        setStep(2);
      } else {
        Alert.alert('Erreur', 'Échec de l’envoi de la photo');
      }
    } catch (err: any) {
      Alert.alert('Erreur', err.message);
    }
  };

  const envoyerPlante = async () => {
    if (!idPlante.trim()) {
      Alert.alert('Erreur', 'Veuillez entrer un ID de plante.');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.85.239:8000/api/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json', 
          'Accept': 'application/ld+json',      
        },
        body: JSON.stringify({ api_id: Number(idPlante) }), 
      });
  
      if (response.ok) {
        Alert.alert('Succès', 'Plante ajoutée ✅');
        setStep(1);
        setImageUri(null);
        setIdPlante('');
        setPictureUrl(null);
      } else {
        const errorData = await response.json();
        Alert.alert('Erreur', errorData.detail || 'Échec de l’ajout de la plante');
      }
    } catch (err: any) {
      Alert.alert('Erreur', err.message);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {step === 1 && (
        <>
          <TouchableOpacity onPress={prendrePhoto} style={styles.button}>
            <Text style={styles.buttonText}>📷 Prendre une photo</Text>
          </TouchableOpacity>

          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </>
      )}

      {step === 2 && (
        <>
          {pictureUrl && <Text style={styles.message}>Image enregistrée ✅</Text>}

          <TextInput
            style={styles.input}
            placeholder="ID de la plante"
            keyboardType="numeric"
            value={idPlante}
            onChangeText={setIdPlante}
          />

          <TouchableOpacity onPress={envoyerPlante} style={styles.button}>
            <Text style={styles.buttonText}>🌱 Créer la plante</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  message: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
