import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { TitleText } from "./StyledText";
import { Icon } from "expo";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

class Navbar extends React.Component {
  render() {
    const { style, back, title } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Icon.Ionicons
          name={`ios-${back ? "arrow-back" : "menu"}`}
          size={Layout.navbarIconSize}
          color={Colors.navbarIconColor}
        />
        <TitleText style={{ color: "#fff" }}>{title}</TitleText>
        <Icon.Ionicons
          name="ios-notifications-outline"
          size={Layout.navbarIconSize}
          color={Colors.navbarIconColor}
        />
      </View>
    );
  }
}

function FooNavbar() {
  return <View style={styles.fooNavbar} />;
}

const navbarBasePadding = Layout.padding / 2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
    paddingTop: getStatusBarHeight() + navbarBasePadding,
    paddingBottom: navbarBasePadding,
    paddingHorizontal: navbarBasePadding,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fooNavbar: {
    backgroundColor: Colors.white,
    paddingTop: getStatusBarHeight()
  }
});

export { Navbar };
export { FooNavbar };
