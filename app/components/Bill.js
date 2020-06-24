import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import defaultStyles from '../config/styles'

function Bill(props) {
    return (
        <View style={{padding:15, backgroundColor:defaultStyles.colors.lighter}}>
            <View style={{borderBottomWidth:1, borderBottomColor:defaultStyles.colors.light, paddingVertical:10}}>
                <AppText style={{color:defaultStyles.colors.blue}}>Bill date: May 24, 2020</AppText>
            </View>
            
            <View style={{paddingVertical:15}}>
                <View>
                    <AppText style={{fontSize:20,fontWeight:'bold'}}>YOUR BILL</AppText>
                </View>
                <View>
                    <AppText style={{fontSize:13}}>Apr 24 - May 23, 2020</AppText>
                </View>
            </View>

            <View style={{padding:10, backgroundColor:'red', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', backgroundColor:defaultStyles.colors.lighter}}>
                <View>
                    <AppText style={{fontSize:20}}>Balance due</AppText>
                </View>
                <View>
                    <AppText style={{fontSize:25, fontWeight:'bold'}}>$1400.00</AppText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default Bill;