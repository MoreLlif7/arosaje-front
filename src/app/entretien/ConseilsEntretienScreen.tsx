import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function EntretienScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Entretien</Text>

      {/* Section avec image et infos */}
      <View style={styles.infoContainer}>
        {/* Image de plante */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2' }}
          style={styles.plantImage}
        />

        {/* Texte à droite */}
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Identifiant</Text>
          <Text style={styles.text}>#PLANT-2025-0421</Text>

          <Text style={styles.subtitle}>Précautions</Text>
          <Text style={styles.text}>• Évitez l'exposition directe au soleil.</Text>
          <Text style={styles.text}>• Arrosez une fois par semaine.</Text>
          <Text style={styles.text}>• Nettoyez les feuilles avec un chiffon doux.</Text>
        </View>
      </View>

      {/* Work in progress */}
      <Text style={styles.wip}>Work in progress... 🚧</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'flex-start',
  },
  plantImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 4,
  },
  wip: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
  },
});
