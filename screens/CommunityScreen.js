import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MessageCircle, Heart } from "lucide-react-native"

const posts = [
  { id: "1", author: "Ahmed", content: "Alhamdulillah for another beautiful day!", likes: 15, comments: 3 },
  {
    id: "2",
    author: "Fatima",
    content: "Just finished reading Surah Al-Kahf. So many lessons to reflect upon.",
    likes: 22,
    comments: 5,
  },
  {
    id: "3",
    author: "Omar",
    content: "Reminder: Don't forget to make dua for our brothers and sisters around the world.",
    likes: 30,
    comments: 8,
  },
]

const CommunityScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postItem}>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calendar-en-RcUQZDbyX5QmHQHSZnuFdy5ekicicP.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.authorName}>{item.author}</Text>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Heart color="#E86452" size={20} />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle color="#E86452" size={20} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Community</Text>
      <FlatList
        data={posts}
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
  postItem: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
  },
  postContent: {
    fontSize: 14,
    marginBottom: 8,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 4,
    color: "#666",
  },
})

export default CommunityScreen

