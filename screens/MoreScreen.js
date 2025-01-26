import React from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Settings, Bell, Moon, HelpCircle, Info } from "lucide-react-native"

const menuItems = [
  { id: "1", title: "Settings", icon: Settings },
  { id: "2", title: "Notifications", icon: Bell },
  { id: "3", title: "Dark Mode", icon: Moon },
  { id: "4", title: "Help & Support", icon: HelpCircle },
  { id: "5", title: "About", icon: Info },
]

const MoreScreen = () => {
  const renderMenuItem = ({ id, title, icon: Icon }) => (
    <TouchableOpacity key={id} style={styles.menuItem}>
      <Icon color="#E86452" size={24} />
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>More</Text>
      <ScrollView contentContainerStyle={styles.content}>{menuItems.map(renderMenuItem)}</ScrollView>
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
  content: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 16,
  },
})

export default MoreScreen

