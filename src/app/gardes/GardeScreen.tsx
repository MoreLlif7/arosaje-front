import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

// Images de fond pour chaque plante (tu peux en ajouter d'autres ou remplacer les liens)
const plantImages = [
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6', // plante 1
  'https://images.unsplash.com/photo-1524593110437-04b8f5a13e3d', // plante 2
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb', // plante 3
];

export default function GardeScreen() {
  const fauxItem = (titre: string) => ({
    title: titre,
    image: plantImages[Math.floor(Math.random() * plantImages.length)],
  });

  const prochainsEntretiens = [fauxItem('Entretien A'), fauxItem('Entretien B')];
  const gardesEnCours = [fauxItem('Garde 1'), fauxItem('Garde 2')];
  const anciennesGardes = [fauxItem('Garde passée A'), fauxItem('Garde passée B')];
  const entretiensPrecedents = [fauxItem('Entretien passé 1'), fauxItem('Entretien passé 2')];

  const renderEmptyBox = () => (
    <Text style={styles.emptyText}>Aucun élément pour le moment.</Text>
  );

  const renderBox = ({ item }: { item: any }) => (
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.videoBox}
      imageStyle={styles.imageBackground}
    >
      <Text style={styles.boxTitle}>{item.title}</Text>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={styles.container}>
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
    height: height / 3.5,
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
    marginRight: 12,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
  },
  imageBackground: {
    borderRadius: 12,
    resizeMode: 'cover',
  },
  boxTitle: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#666',
    marginLeft: 16,
    marginTop: 10,
  },
});
