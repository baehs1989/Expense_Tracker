import React from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left, Footer } from 'native-base';
import {View, StyleSheet, Modal} from 'react-native';

import defaultStyles from '../config/styles';

function AppModal({visible, innerContainerStyle, children ,transparent=true, animationType="slide" }){
  return (
    <Modal visible={visible} transparent={transparent} animationType={animationType}>
        <View style={styles.outerContainer}>
            <View style={[styles.innerContainer, innerContainerStyle]}>
                {children}
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    outerContainer : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    innerContainer:{
        width: 300,
        height: 300,
        backgroundColor:defaultStyles.colors.lighter,
        borderRadius:10,
        padding:10
    }
});

export default AppModal;