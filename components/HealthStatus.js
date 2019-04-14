import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "expo";
import { Card, CardBody, CardHeader } from "./Card";
import { MonoText, TitleText } from "./StyledText";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function Percentage(props) {
  const { icon, percentage, text, color, size } = props;
  return icon ? (
    <>
      <Icon.Ionicons name={icon} size={size} color={Colors[color]} />
      <MonoText style={[styles.statusTextColor, { color: Colors[color] }]}>
        {percentage * 100}%
      </MonoText>
    </>
  ) : (
    <View
      style={[
        styles.percentage,
        {
          backgroundColor: Colors[color],
          width: size,
          height: size,
          borderRadius: size
        }
      ]}
    >
      <TitleText style={styles.statusTextColor}>{percentage * 100}%</TitleText>
      {text && <MonoText style={styles.statusTextColor}>{text}</MonoText>}
    </View>
  );
}

function Status(props) {
  const { icon, name, color, percentage, text, size } = props;
  return (
    <View style={styles.status}>
      <Percentage
        icon={icon}
        text={text}
        percentage={percentage}
        color={color}
        size={size}
      />
      {name && <MonoText style={{ fontSize: 12 }}>{name}</MonoText>}
    </View>
  );
}

function HealthStatusCard() {
  return (
    <Card>
      <CardHeader style={styles.header}>
        <Status size={100} text="Good" color="green" percentage={0.8} />
        <TitleText>Good Health</TitleText>
        <MonoText style={styles.description}>
          Your financial condition is in good health
        </MonoText>
      </CardHeader>
      <CardBody style={styles.body}>
        <Status
          percentage={0.75}
          size={25}
          icon="ios-wallet"
          name="Cash Flow"
          color="purple"
        />
        <Status
          percentage={0.5}
          size={25}
          icon="ios-document"
          name="Loan"
          color="blue"
        />
        <Status
          percentage={0.65}
          size={25}
          icon="ios-checkmark-circle"
          name="Insurance"
          color="purple"
        />
        <Status
          percentage={0.2}
          size={25}
          icon="ios-trending-up"
          name="Investment"
          color="purple"
        />
      </CardBody>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    textAlign: "center"
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  description: {
    opacity: 0.75
  },
  status: {
    alignItems: "center",
    flex: 1
  },
  percentage: {
    alignItems: "center",
    justifyContent: "center",
    margin: Layout.margin,
    padding: Layout.padding
  },
  statusTextColor: {
    color: Colors.white
  }
});

export { HealthStatusCard };
