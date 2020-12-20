import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function registerSuccess({ navigation }) {
  
  function signup() {
    
        navigation.navigate("Login");
      }
      
      
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.logo}>Register an account</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="email"
            placeholder="Email"
            placeholderTextColor="white"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            onChangeText={(input) => setEmail(input)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Password"
            placeholderTextColor="white"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(input) => setPassword(input)}
          />
        </View>

        <TouchableOpacity onPress={signup} style={styles.signupBtn}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>


        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "beige",
    textAlign: "center",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  signupBtn: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: "black",
  },
  signUpText: {
    color: "white",
  },
  errorText: {
    color: "white",
  },
});
