import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EntretienScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entretien</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
