import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  LogBox
} from "react-native";
import firebase from "../database/firebaseDB";

LogBox.ignoreLogs(['Setting a timer']);


const auth = firebase.auth();

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  function signup() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('created user successfully. please log in' 
    );
        navigation.navigate("Login");
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
        <Text style={styles.logo}>Register an account</Text>
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
    fontSize: 30,
    color: "beige",
    textAlign: "center",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 60,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },

  signupBtn: {
    width: "80%",
    backgroundColor: "lightblue",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
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
