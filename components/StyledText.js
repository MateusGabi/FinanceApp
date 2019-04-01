import React from "react";
import { Text } from "react-native";

function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

function TitleText(props) {
  return (
    <MonoText {...props} style={[props.style, { fontSize: 22 }]} /> 
  );
}

export { TitleText };
export { MonoText };
