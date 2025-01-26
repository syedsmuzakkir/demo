import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import DateConverterScreen from "../screens/DateConverterScreen"
import IslamicDaysScreen from "../screens/IslamicDaysScreen"

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="DateConverter"
        component={DateConverterScreen}
        options={{
          headerStyle: {
            backgroundColor: "#E86452",
          },
          headerTintColor: "#fff",
          headerTitle: "Date Converter",
        }}
      />
      <Stack.Screen
        name="IslamicDays"
        component={IslamicDaysScreen}
        options={{
          headerStyle: {
            backgroundColor: "#E86452",
          },
          headerTintColor: "#fff",
          headerTitle: "Islamic Days",
        }}
      />
    </Stack.Navigator>
  )
}

