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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  function login() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        navigation.navigate("Chat");
      })
      .catch((error) => {
        console.log("Error!");
        console.log(error.message);
        setErrorText(error.message);
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.logo}>Chat App</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="email"
            placeholder="Email"
            placeholderTextColor="black"
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
            placeholderTextColor="black"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(input) => setPassword(input)}
          />
        </View>

        <TouchableOpacity onPress={login} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpText}>Signup</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslateblue",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 45,
    color: "beige",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
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
  loginBtn: {
    width: "80%",
    backgroundColor: "lightblue",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
  signUpText: {
    color: "white",
  },
  errorText: {
    color: "white",
  },
});
