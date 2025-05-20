import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Les permissions sont en cours de chargement
    return <View style={styles.container} />;
  }

  if (!permission.granted) {

    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Nous avons besoin de votre permission pour accéder à la caméra
        </Text>
        <Button onPress={requestPermission} title="Accorder la permission" />
      </View>
    );
  }

  // Fonction pour changer la caméra front/back
  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>🔄 Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    padding: 20,
    color: '#fff',
    fontSize: 16,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffffff80',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});
