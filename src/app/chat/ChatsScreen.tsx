import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';




const mockMessages = [
  { id: '1', user: 'User 1' },
  { id: '2', user: 'User 2' },
];

export default function ChatsScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu Chat</Text>
      </View>

      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.messageRow}
            onPress={() => navigation.navigate('ChatDetail', { userId: item.id })}
          >
            <Text style={styles.messageText}>Message avec : {item.user}</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#4CAF50" />
          </TouchableOpacity>
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
  list: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  messageText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    flex: 1,
  },
});
