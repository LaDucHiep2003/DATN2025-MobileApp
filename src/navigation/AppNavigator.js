import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import HomeScreen from "../screens/home/HomeScreen";
import VocabQuestScreen from "../screens/home/VocabQuestScreen";
import TopicHomeScreen from '../screens/topic/HomeScreen';
import ProfileScreen from "../screens/profile/ProfileScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // ẩn header mặc định
        }}
      >
        {/* Auth flow */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Home flow */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Vocab" component={VocabQuestScreen} />

        {/* Topic */}
        <Stack.Screen name="HomeTopic" component={TopicHomeScreen} />

        {/* Profile */}
        <Stack.Screen name="Profile" component={ProfileScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
