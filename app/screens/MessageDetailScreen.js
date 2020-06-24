import React from 'react';
import {View, StyleSheet} from 'react-native';

import Screen from "../components/Screen";
import AppText from '../components/AppText';
import Bill from '../components/Bill';
import defaultStyles from '../config/styles';

function MessageDetailScreen(props){
  return (
    <Screen style={{backgroundColor:defaultStyles.colors.white}}>
       <View style={{padding:25}}>
           <AppText>Your monthly bill is ready for Greenview ave..</AppText>
           <View style={{marginTop:15}}>
            <Bill/>
           </View>
       </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
});

export default MessageDetailScreen;