import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconBadge from 'react-native-icon-badge';
import {Ionicons, FontAwesome5} from '@expo/vector-icons'

function BadgeIcon({size, color}){
  return (
    <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
        <IconBadge
            MainElement={
                    <View style={
                        {
                            width:size*2,
                            height:size*1.3,
                            justifyContent:'flex-end',
                            alignItems:'center'
                        }
                    }>
                        <FontAwesome5 name="file-invoice" size={size} color={color}/>
                    </View>
                    
                }
            BadgeElement={
                    <Text style={{color:'#FFFFFF', fontSize:size/2.5, fontWeight:'bold'}}>{"+99"}</Text>
                }
            IconBadgeStyle={
                    {
                        width:size/1.5,
                        height:size/1.5,
                        backgroundColor: 'red'
                    }
                }
            Hidden={false}
            />
    </View>
  );
}

const styles = StyleSheet.create({
});

export default BadgeIcon;