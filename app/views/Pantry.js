import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-ico";
import moment from "moment";
import Colors from "../constants/Colors";
import ArrowBack from "../components/ArrowBack";

export default function Pantry({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
            <ArrowBack navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 50,
  },
});
