import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MonoText, H1 } from "../components/StyledText";
import { FooNavbar } from "../components/Navbar";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

// TODO: paste to component dir
function Button(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          padding: Layout.padding / 2,
          marginVertical: Layout.margin,
          borderRadius: 10 * 4,
          backgroundColor: Colors[props.color]
        }}
      >
        <MonoText
          style={{
            textAlign: "center"
          }}
        >
          {props.title}
        </MonoText>
      </View>
    </TouchableOpacity>
  );
}

function IntroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <H1
          style={{
            margin: Layout.margin
          }}
        >
          Let's get started
        </H1>
        <MonoText style={styles.description}>
          Never a better time than now to start thinking about how you manage
          all your finances with ease.
        </MonoText>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonArea}>
          <Button title="Create Account" color="purple" />
          <Button title="Login" color="white" />
        </View>
      </View>
    </View>
  );
}

IntroScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey
  },
  description: { textAlign: "center", opacity: 0.75 },
  message: {
    //    backgroundColor: "red",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Layout.padding * 2
  },
  footer: {
    //	flex: 1,
    //	alignItems: 'flex-end'
  },
  buttonArea: {
    //    backgroundColor: "blue",
    alignItems: "stretch",
    padding: Layout.padding,
    //flex: 1,
    flexDirection: "column"
  }
});

export default IntroScreen;
