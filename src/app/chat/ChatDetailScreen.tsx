import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Simule les messages du chat (sent = true => message envoyé, false => reçu)
const mockMessages = [
  { id: '1', text: 'Salut, comment ça va ?', sent: true },
  { id: '2', text: 'Ça va bien, merci ! Et toi ?', sent: false },
  { id: '3', text: 'Super aussi, merci.', sent: true },
  { id: '4', text: 'Content de l’entendre.', sent: false },
];

export default function ChatDetailScreen({ route }) {
  const { userId } = route.params;
  // Ici on simule juste le nom d'utilisateur
  const userName = `User ${userId}`;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>

      {/* Bloc utilisateur */}
      <View style={styles.userRow}>
        <Text style={styles.userLabel}>Utilisateur</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      {/* Liste des messages */}
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        renderItem={({ item }) => (
          <View style={[styles.messageBox, item.sent ? styles.messageSent : styles.messageReceived]}>
            <Text style={[styles.messageText, item.sent ? styles.textSent : styles.textReceived]}>
              {item.text}
            </Text>
          </View>
        )}
      />
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
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  userLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444',
  },
  userName: {
    fontSize: 16,
    color: '#444',
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageBox: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  messageSent: {
    backgroundColor: '#256D38', 
    alignSelf: 'flex-end',
  },
  messageReceived: {
    backgroundColor: '#88C999', 
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  textSent: {
    color: 'white',
  },
  textReceived: {
    color: 'black',
  },
});
