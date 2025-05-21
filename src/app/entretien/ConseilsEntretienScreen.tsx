import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';

export default function EntretienScreen() {
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.85.239:8000/api/advices/1', {
      headers: {
        Accept: 'application/ld+json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.content); // adapte "content" si la clé est différente
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des conseils :', error);
        setLoading(false);
      });
  }, []);

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
          <Text style={styles.text}>1</Text>

          <Text style={styles.subtitle}>Précautions</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : advice ? (
            advice.split('\n').map((line, index) => (
              <Text key={index} style={styles.text}>• {line}</Text>
            ))
          ) : (
            <Text style={styles.text}>Aucun conseil disponible.</Text>
          )}
        </View>
      </View>

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
