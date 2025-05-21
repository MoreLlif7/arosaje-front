import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Linking,
  Image,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.33;

const videos = [
  {
    id: "1",
    title: "Plantes 1",
    image: "https://img.youtube.com/vi/3EpWkLoJ68Q/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=3EpWkLoJ68Q",
  },
  {
    id: "2",
    title: "Plantes 2",
    image: "https://img.youtube.com/vi/NJkxrhKx5gI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=NJkxrhKx5gI",
  },
];

export default function AccueilScreen() {
  const openYoutube = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Erreur ouverture URL :", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Image background en haut */}
      <ImageBackground
        source={require("@/../assets/images/background.jpeg")}
        style={styles.background}
        imageStyle={styles.backgroundImageStyle}
      >
        {/* Bouton en bas de l'image */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>En savoir plus</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Section carrousel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes gardes récentes</Text>
        {/* Carrousel vide, on peut mettre un FlatList horizontale vide */}
        <FlatList
          data={[]}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => null}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Aucune garde récente pour le moment.</Text>
          }
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Section vidéos YouTube */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vidéos plantes - C'est pas sorcier</Text>
        <View style={styles.videosContainer}>
          {videos.map((video) => (
            <TouchableOpacity
              key={video.id}
              style={styles.videoBox}
              onPress={() => openYoutube(video.url)}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: video.image }}
                style={styles.videoImage}
                resizeMode="cover"
              />
              <Text style={styles.videoTitle}>{video.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F1F0",
  },
  background: {
    height: IMAGE_HEIGHT,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  backgroundImageStyle: {
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
  },
  button: {
    backgroundColor: "#4CAF50", // vert
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    width: 160,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  emptyText: {
    fontStyle: "italic",
    color: "#666",
    textAlign: "center",
  },
  videosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  videoBox: {
    width: (width - 60) / 2, 
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  videoImage: {
    width: "100%",
    height: 120,
  },
  videoTitle: {
    padding: 8,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
});
