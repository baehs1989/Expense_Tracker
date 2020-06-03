import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ListItemWishAction({ onPress, size=70 }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, {width:size}]}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={size/2}
          color={colors.dark}
        />
      </View>
    </TouchableWithoutFeedback>
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
