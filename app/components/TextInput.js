import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, style, backgroundColor=defaultStyles.colors.light, width = "100%", error=false, ...otherProps }) {
  return (
    <View style={[styles.container, { width }, {backgroundColor}, error?{borderColor:'red', borderWidth:3}:null]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, style]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
