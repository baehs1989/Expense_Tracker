import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ListItemEditAction({ onPress, size=70 }) {
  return (
    <TouchableOpacity style={[styles.container, {width:size}]} onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={size/2}
          color={colors.dark}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemEditAction;
