import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ListItemWishAction({ onPress, size=70 }) {
  return (
    <TouchableOpacity style={[styles.container, {width:size}]} onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="heart-outline"
          size={size/2}
          color={colors.dark}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemWishAction;
