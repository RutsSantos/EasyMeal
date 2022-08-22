import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
// import { Item, Input, Label } from "native-base";
import Colors from "../constants/Colors";

export default function LoginInput({ label, type, onChange, text }) {
  return (
    <View floatingLabel style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        value={text}
        autoCapitalize='none'
        secureTextEntry={type == "password" ? true : false}
        style={{ height: 60, color: Colors.SECONDARY }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.PRIMARY,
  },
  item: {
    marginVertical: 15,
  },
});
