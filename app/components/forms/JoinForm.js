import React from 'react';
import {View, StyleSheet} from 'react-native';

import Screen from '../Screen'
import TextInput from '../TextInput'
import AppButton from '../Buttons/AppButton'
import defaultStyles from '../../config/styles'


function JoinForm(props){
  return (
    <Screen>
        <View>
            <View>
                <TextInput
                    onChangeText={()=>console.log("Change")}
                    width={'100%'}
                    backgroundColor={defaultStyles.colors.white}
                    placeholder="Invite Code"
                    style={styles.field}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Join"/>
            </View>
        </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
    },
    field:{
        flex:1,
    }
});

export default JoinForm;