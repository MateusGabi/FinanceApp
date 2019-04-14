import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MonoText, TitleText } from "../components/StyledText";
import { FooNavbar } from "../components/Navbar";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function IntroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <TitleText
          style={{
            margin: Layout.margin
          }}
        >
          Let's get started
        </TitleText>
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
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Layout.padding * 2
  },
  footer: {},
  buttonArea: {
    alignItems: "stretch",
    padding: Layout.padding,
    flexDirection: "column"
  }
});

export default IntroScreen;
