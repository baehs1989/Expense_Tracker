import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import AppText from '../AppText';


function TextButton({
    name,
    onPress,
    title,
    size=10,
    backgroundColor = "#000",
    textColor = "#fff",
})
{
  var buttonStyles={
      backgroundColor:backgroundColor,
      color:textColor,
      fontSize:size
  }
  return (
    <TouchableOpacity onPress={()=>onPress()}>
        <View style={styles.container}>
            <Text style={[styles.button, buttonStyles]}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:'red',
        padding:10,
        color:'white'
    }
});

export default TextButton;