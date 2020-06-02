import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  type="MaterialCommunityIcons",
  backgroundColor = "#000",
  iconColor = "#fff",
}) {

  let properties = {
    name:name,
    color:iconColor,
    size:size * 0.5
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {type==="MaterialCommunityIcons" && <MaterialCommunityIcons {...properties} />}
      {type==='FontAwesome' && <FontAwesome {...properties}/>}
    </View>
  );
}

export default Icon;
