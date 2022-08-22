import React from "react";
import { View, StyleSheet } from "react-native";
// import { Card } from "native-base";
import Icon from "react-native-ico";
import Colors from "../constants/Colors";
import { ContentText, CardTitle } from "./Text";

export function Cards({ title, content, iconName, background, color }) {
  return (
    <View style={[{ backgroundColor: background },styles.card ]}>
      <View style={styles.cardContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {iconName ? (
            <Icon
              name={iconName}
              height='25'
              width='25'
              color={Colors.PRIMARY}
              group='essential'
            />
          ) : null}
          <CardTitle text={title} color={color ? color : Colors.PRIMARY} />
        </View>
        <ContentText text={content} color={color} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardContent: {
    margin: 25,
  },
});
