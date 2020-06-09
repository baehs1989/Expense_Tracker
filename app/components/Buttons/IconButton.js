import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

function IconButton({
    name,
    onPress,
    size=10,
    type="MaterialCommunityIcons",
    iconColor = "#fff",
    style
})
{
  var properties = {
      name:name,
      size:size,
      iconColor:iconColor
  }

  return (
    <TouchableOpacity onPress={()=>onPress()} style={style}>
        {type==="MaterialCommunityIcons" && <MaterialCommunityIcons {...properties} />}
        {type==='FontAwesome' && <FontAwesome {...properties}/>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});

export default IconButton;