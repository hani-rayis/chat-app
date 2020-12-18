import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Signup</Text>
        </TouchableOpacity>
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
    fontSize: 50,
    color: "beige",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "gray",
    borderRadius: 25,
    height: 50,
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
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
  signUpText: {
    color: "white",
  },
});
