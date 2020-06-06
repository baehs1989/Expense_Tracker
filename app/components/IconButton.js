import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

function IconButton({
    name,
    onPress,
    size=10,
    type="MaterialCommunityIcons",
    backgroundColor = "#000",
    iconColor = "#fff",
})
{
  var properties = {
      name:name,
      size:size,
      backgroundColor:backgroundColor,
      iconColor:iconColor
  }

  return (
    <TouchableOpacity onPress={()=>onPress()}>
        {type==="MaterialCommunityIcons" && <MaterialCommunityIcons {...properties} />}
        {type==='FontAwesome' && <FontAwesome {...properties}/>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});

export default IconButton;