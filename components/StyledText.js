import React from "react";
import { Text } from "react-native";

function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

function H1(props) {
  return (
    <MonoText style={[props.style, { fontSize: 22, fontWeight: "bold" }]}>
      {props.children}
    </MonoText>
  );
}

export { H1 };
export { MonoText };
