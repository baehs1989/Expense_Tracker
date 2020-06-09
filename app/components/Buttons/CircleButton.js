import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

function CircleButton({
    name,
    onPress,
    size=30,
    type="MaterialCommunityIcons",
    iconColor = "#fff",
    backgroundColor='white'
}){
    var properties = {
        name:name,
        size:size,
        iconColor:iconColor
    }

    var containerStyle = {
        width:size*2,
        height:size*2,
        backgroundColor:backgroundColor,
        borderRadius:size
    }

  return (
    <TouchableOpacity onPress={()=>onPress()} style={[styles.buttonContainer, containerStyle]}>
        {type==="MaterialCommunityIcons" && <MaterialCommunityIcons {...properties} />}
        {type==='FontAwesome' && <FontAwesome {...properties}/>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:60,
        height:60,
        backgroundColor:'green',
        padding:2,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:3        
    }
});

export default CircleButton;