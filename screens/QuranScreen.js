import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Book } from "lucide-react-native"

const surahs = [
  { id: "1", name: "Al-Fatihah", verses: 7 },
  { id: "2", name: "Al-Baqarah", verses: 286 },
  { id: "3", name: "Ali 'Imran", verses: 200 },
  { id: "4", name: "An-Nisa", verses: 176 },
  { id: "5", name: "Al-Ma'idah", verses: 120 },
]

const QuranScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.surahItem}>
      <View style={styles.surahInfo}>
        <Text style={styles.surahName}>{item.name}</Text>
        <Text style={styles.surahVerses}>{item.verses} verses</Text>
      </View>
      <Book color="#E86452" size={24} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Al-Quran</Text>
      <FlatList
        data={surahs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#E86452",
  },
  listContent: {
    paddingHorizontal: 16,
  },
  surahItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  surahInfo: {
    flex: 1,
  },
  surahName: {
    fontSize: 18,
    fontWeight: "600",
  },
  surahVerses: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
})

export default QuranScreen

