import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MonoText, H1 } from "../components/StyledText";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function Button(props) {
  const { title, color } = props;

  let _color = color || "white";

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: Colors[_color]
          }
        ]}
      >
        <MonoText style={styles.text}>{title}</MonoText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Layout.padding / 2,
    marginVertical: Layout.margin,
    borderRadius: 10 * 4
  },
  text: {
    textAlign: "center"
  }
});

export default Button;
