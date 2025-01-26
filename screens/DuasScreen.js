import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Heart } from "lucide-react-native"

const duas = [
  { id: "1", title: "Morning Dua", arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا" },
  { id: "2", title: "Evening Dua", arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا" },
  { id: "3", title: "Before Eating", arabic: "بِسْمِ اللهِ" },
  { id: "4", title: "After Eating", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا" },
]

const DuasScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.duaItem}>
      <View style={styles.duaInfo}>
        <Text style={styles.duaTitle}>{item.title}</Text>
        <Text style={styles.duaArabic}>{item.arabic}</Text>
      </View>
      <Heart color="#E86452" size={24} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Duas</Text>
      <FlatList
        data={duas}
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
  duaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  duaInfo: {
    flex: 1,
  },
  duaTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  duaArabic: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
})

export default DuasScreen

