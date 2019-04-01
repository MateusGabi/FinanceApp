import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MonoText, TitleText } from "../components/StyledText";
import Button from "../components/Button";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { Card } from "../components/Card";
import InputText from "../components/InputText";

class CreateAccountScreen extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <TitleText
          style={{
            margin: Layout.margin,
            fontFamily: "space-mono",
            textAlign: "center"
          }}
        >
          Registration
        </TitleText>
        <MonoText style={styles.description}>
          Enter your mobile number, we will send you OTP to verify later
        </MonoText>
        <Card>
          <InputText
            placeholder="(+62) 8128008011"
            onChangeText={text => this.setState({ text })}
          />
          <Button title="Continue" color="purple" />
        </Card>
      </View>
    );
  }
}

CreateAccountScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    justifyContent: "center"
  },
  description: { textAlign: "center", opacity: 0.75, margin: Layout.margin * 3 }
});

export default CreateAccountScreen;
