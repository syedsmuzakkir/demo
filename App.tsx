// import React from "react"
// import { NavigationContainer } from "@react-navigation/native"
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { SafeAreaProvider } from "react-native-safe-area-context"
// import HomeStack from "./navigation/HomeStack"
// import QuranScreen from "./screens/QuranScreen"
// import CommunityScreen from "./screens/CommunityScreen"
// import DuasScreen from "./screens/DuasScreen"
// import MoreScreen from "./screens/MoreScreen"
// import { Home, Book, Users, Heart, MoreHorizontal } from "lucide-react-native"

// const Tab = createBottomTabNavigator()

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: "#ffffff",
//           borderTopWidth: 1,
//           borderTopColor: "#e5e5e5",
//           height: 60,
//         },
//         tabBarActiveTintColor: "#E86452",
//         tabBarInactiveTintColor: "#999999",
//         tabBarLabelStyle: {
//           fontSize: 12,
//           marginBottom: 5,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           tabBarIcon: ({ color }) => <Home size={24} color={color} />,
//           tabBarLabel: "Home",
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Al Quran"
//         component={QuranScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Book size={24} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Community"
//         component={CommunityScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Users size={24} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Duas"
//         component={DuasScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Heart size={24} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="More"
//         component={MoreScreen}
//         options={{
//           tabBarIcon: ({ color }) => <MoreHorizontal size={24} color={color} />,
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <TabNavigator />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   )
// }




import React from 'react';
import { View, Text, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import YouTubeChannelVideos from './assets/components/Youtube';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You just clicked the button.');
    console.log('Hello from the console!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App</Text>
      <Button title="Click Me" onPress={handlePress} />
      <TouchableOpacity activeOpacity={0.6} onPress={handlePress}>
        <Text style={styles.alertText}>Hello from Alert</Text>
      </TouchableOpacity>
      <View style={styles.youtubeContainer}>
        <YouTubeChannelVideos />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the app takes up the entire screen
    backgroundColor: '#000', // Adds contrast for text and videos
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  youtubeContainer: {
    flex: 1, // Ensures the YouTube component takes up remaining space
  },
});

export default App;
