import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';

import defaultStyles from '../config/styles';
import TextButton from '../components/Buttons/TextButton'

function AppModal({visible, onCancel, onOk, outerContainerStyle, innerContainerStyle, children ,transparent=true, animationType="slide" }){
  return (
    <Modal visible={visible} transparent={transparent} animationType={animationType}>
        <View style={[styles.outerContainer, outerContainerStyle]}>
            <View style={[styles.innerContainer, innerContainerStyle]}>
                <View style={styles.actionButtons}>
                    <TextButton title="Ok" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onOk}/>
                    <TextButton title="Cancel" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onCancel}/>
                </View>
                {children}
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    outerContainer : {
        flex: 1,
        flexDirection: 'row',
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
    },
    actionButtons:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:"space-between"
    }
});

export default AppModal;