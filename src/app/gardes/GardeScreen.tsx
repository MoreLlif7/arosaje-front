import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function GardeScreen() {
  const prochainsEntretiens = [];
  const gardesEnCours = [];
  const anciennesGardes = [];
  const entretiensPrecedents = [];

  const renderEmptyBox = () => (
    <Text style={styles.emptyText}>Aucun élément pour le moment.</Text>
  );

  const renderBox = ({ item }: { item: any }) => (
    <View style={styles.videoBox}>
      {/* Affichage de plante à venir */}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Titre principal */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mes Gardes</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Section 1 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Prochains Entretiens</Text>
          </View>
          <FlatList
            data={prochainsEntretiens}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderBox}
            ListEmptyComponent={renderEmptyBox}
            contentContainerStyle={styles.boxList}
          />
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Gardes en cours</Text>
          </View>
          <FlatList
            data={gardesEnCours}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderBox}
            ListEmptyComponent={renderEmptyBox}
            contentContainerStyle={styles.boxList}
          />
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Anciennes Gardes</Text>
          </View>
          <FlatList
            data={anciennesGardes}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderBox}
            ListEmptyComponent={renderEmptyBox}
            contentContainerStyle={styles.boxList}
          />
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Entretiens Précédents</Text>
          </View>
          <FlatList
            data={entretiensPrecedents}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderBox}
            ListEmptyComponent={renderEmptyBox}
            contentContainerStyle={styles.boxList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F1F0',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#E6F1F0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  section: {
    height: height / 3,
    width: '100%',
  },
  sectionHeader: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  boxList: {
    paddingHorizontal: 16,
    paddingTop: 10,
    gap: 12,
  },
  videoBox: {
    width: (width - 60) / 2,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#666',
    marginLeft: 16,
    marginTop: 10,
  },
});
