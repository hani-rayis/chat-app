import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/loginScreen";
import ChatScreen from "./screens/chatScreen";
import SignupScreen from "./screens/signUpScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        /*screenOptions={{
          headerShown: false,
        }}*/
      >
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={ChatScreen} name="Chat" />
        <Stack.Screen component={SignupScreen} name="SignUp" />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
