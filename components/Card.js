import React from "react";
import { Icon } from "expo";
import { View, StyleSheet } from "react-native";

import { MonoText } from "./StyledText";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

function CardHeader(props) {
  const { style, children } = props;

  return <View style={[styles.header, style]}>{children}</View>;
}

function CardBody(props) {
  const { style, children } = props;

  return <View style={[styles.body, style]}>{children}</View>;
}

function Card(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    margin: Layout.margin,
    padding: Layout.padding / 2,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  body: {
    padding: Layout.padding / 2
  },
  header: {
    padding: Layout.padding / 2,
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey
  }
});

export { Card };
export { CardHeader };
export { CardBody };
