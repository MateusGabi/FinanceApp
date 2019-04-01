import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function TextInput(props) {
  return <RNTextInput {...props} style={[props.style, styles.input]} />;
}

const styles = StyleSheet.create({
  input: {
    // height: 40,
    borderWidth: 2,
    borderColor: "#f2f2f2",
    padding: Layout.padding / 3,
    marginVertical: Layout.margin,
    borderRadius: 5
  }
});

export default TextInput;
