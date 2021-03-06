import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import defaultStyles from '../../config/styles';

function AppButton({ title, onPress, style, IconComponent, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: defaultStyles.colors[color]}, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{IconComponent && IconComponent}{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
