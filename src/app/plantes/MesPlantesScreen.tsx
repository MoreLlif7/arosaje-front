import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';





const { width } = Dimensions.get("window");

export default function MesPlantesScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Pour l'instant, pas de plantes, tableau vide
  const plantes = [];

  return (
    <SafeAreaView style={styles.container}>
      {/* Titre */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mes Plantes</Text>
      </View>

      {/* Boutons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#808000" }]} 
          onPress={() => navigation.navigate("DemandeGarde")}
        >
          <Text style={styles.buttonText}>Faire une demande de garde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#86B883" }]} 
          onPress={() => navigation.navigate("AjouterPlante")}
        >
          <Text style={styles.buttonText}>Ajouter une plante</Text>
          {/* texte blanc */}
        </TouchableOpacity>
      </View>

      {/* Liste photos plantes (vide pour l'instant) */}
      <FlatList
        data={plantes}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.plantesList}
        renderItem={() => (
          <View style={styles.planteBox}>
            {/* Ici mettra les photos des plantes */}
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucune plante pour le moment.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F1F0",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#E6F1F0",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16, // espace entre les boutons (React Native >=0.71 supporte gap)
  },
  button: {
    width: width * 0.9,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  plantesList: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  planteBox: {
    backgroundColor: "white",
    height: 150,
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    // ici tu pourras mettre l'image de ta plante plus tard
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#666",
    fontStyle: "italic",
  },
});
