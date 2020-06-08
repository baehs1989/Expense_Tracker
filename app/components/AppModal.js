import React from 'react';
import {View, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';

import defaultStyles from '../config/styles';
import TextButton from '../components/Buttons/TextButton'

function AppModal({visible, onCancel, onOk, innerContainerStyle, children, animationType="slide", buttonLocation="top" }){
  return (
    <Modal isVisible={visible} onBackdropPress={onCancel} style={styles.modal} animationType={animationType}>
            <View style={[styles.innerContainer, innerContainerStyle]}>
                {buttonLocation==='bottom' && children}
                {
                    onCancel && onOk && 
                    <View style={styles.actionButtons}>
                        <TextButton title="Cancel" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onCancel}/>
                        <TextButton title="Done" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onOk}/>
                    </View>
                }
                {buttonLocation==='top' && children}
            </View>
    </Modal>


  );
}

const styles = StyleSheet.create({
    modal:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
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