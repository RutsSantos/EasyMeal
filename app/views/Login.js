import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Title } from "../components/Text";
import Button from "../components/Button";
import LoginInput from "../components/LoginInput";
// import { getUsers, authenticateUser } from "../utils/api/firebaseConfig";
import { auth } from "../../firebase";
import { authenticateUser } from "../utils/api/firebaseConfig";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (username, password) => {
    authenticateUser(username, password, navigation)
    // authenticateUser(username, password, navigation);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/soup.jpg")}
        blurRadius={2}
        style={styles.image}
      />
      <View style={styles.content}>
        <Title text='EasyMeal' />
        <View style={{marginVertical: 40}}>
          <LoginInput
            label='Usuario/correo'
            text={username}
            onChange={(text) => setUsername(text)}
          />
          <LoginInput
            label='ContraseÃ±a'
            type='password'
            text={password}
            onChange={(text) => setPassword(text)}
          />
        </View>
        <Button text='Ingresar' onClick={() => onSubmit(username, password)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 90,
  },
  header: {
    height: "45%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.1,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
  },
});
