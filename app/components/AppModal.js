import React from 'react';
import {View, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';

import defaultStyles from '../config/styles';
import TextButton from '../components/Buttons/TextButton'

function AppModal({visible, onCancel, onClose, onOk, innerContainerStyle, modalStyle, children, buttonLocation="top" }){
  return (
    <Modal isVisible={visible} onBackdropPress={onCancel||onClose} style={[styles.modal, modalStyle]}>
            <View style={[styles.innerContainer, innerContainerStyle]}>
                {buttonLocation==='bottom' && children}
                <View style={styles.actionButtons}>
                    {onCancel && <TextButton title="Cancel" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onCancel}/>}
                    {onClose && <TextButton title="Close" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onClose}/>}
                    {onOk && <TextButton title="Done" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onOk}/>}

                </View>
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
        backgroundColor:defaultStyles.colors.light,
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