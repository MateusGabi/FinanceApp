import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { MonoText } from "./StyledText";
import { Icon } from "expo";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { withAnimation } from "../helper/withAnimation";

class UserProfile extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View>
          <Image
            style={styles.profile}
            source={{
              uri:
                "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
            }}
          />
        </View>
        <View>
          <MonoText style={styles.name}>Mateus Gabi Moreira</MonoText>
          <MonoText style={styles.email}>mateusgabimoreira@gmail.com</MonoText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
    paddingHorizontal: Layout.padding / 2,
    paddingBottom: Layout.padding / 2,
    alignItems: "center",
    flexDirection: "row"
  },
  name: {
    color: Colors.white
  },
  email: {
    color: Colors.white,
    opacity: 0.75
  },
  profile: {
    width: 50,
    height: 50,
    marginRight: Layout.margin
  }
});

export default withAnimation(UserProfile);
