import { Animated } from "react-native";

export function withAnimation(component) {
  return new Animated.createAnimatedComponent(component);
}