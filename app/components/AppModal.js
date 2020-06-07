import React from 'react';
import {View, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';

import defaultStyles from '../config/styles';
import TextButton from '../components/Buttons/TextButton'
import AppText from './AppText';
import AppButton from './Buttons/AppButton';

function AppModal({visible, onCancel, onOk, innerContainerStyle, children ,transparent=true, animationType="slide" }){
  return (
    <Modal isVisible={visible} onBackdropPress={onCancel} style={styles.modal}>
            <View style={[styles.innerContainer, innerContainerStyle]}>
                {
                    onCancel && onOk && 
                    <View style={styles.actionButtons}>
                        <TextButton title="Cancel" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onCancel}/>
                        <TextButton title="Done" size={17} backgroundColor="rgba(52, 52, 52, 0)" textColor={defaultStyles.colors.dark} onPress={onOk}/>
                    </View>
                }
                {children}
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