import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/actions/AuthAction";
const AuthScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    if (username.length > 0 && password.length > 0) {
      dispatch(authAction(username, password));
    } else {
      Alert.alert("Alert", "Enter Valid Details", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/login_background.jpg")}
    >
      <View style={{marginTop:'75%',width:'100%',alignItems:'center'}}>
        <TextInput
          placeholder="Username"
          style={styles.textInputContainer}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="password"
          style={styles.textInputContainer}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          style={styles.loginContainer}
          onPress={() => {
            loginHandler();
          }}
        >
          <Text style={styles.login}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    width: "90%",
    borderRadius: 8,
    padding: "3%",
    marginVertical: "2%",
    backgroundColor: "#d9d9f2",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
  },
  login: {
    color:'white',
    paddingHorizontal: "12%",
    backgroundColor: "#9f9fdf",
    fontSize: 18,
    paddingVertical: "2%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
    overflow: "hidden",
  },
});

export default AuthScreen;
