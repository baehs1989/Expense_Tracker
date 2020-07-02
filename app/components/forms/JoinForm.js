import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Screen from '../Screen'
import TextInput from '../TextInput'
import AppButton from '../Buttons/AppButton'
import defaultStyles from '../../config/styles'
import ErrorMessage from './ErrorMessage'


function JoinForm({onSubmit}){
  const [code, setCode] = useState(null)
  const [formError, setFormError] = useState(false);

  const onHandleJoin = () => {
    if (code){
        onSubmit(code)
        return
    }
    setFormError(true)
  }

  return (
    <Screen>
        <View>
            <ErrorMessage error="You entered an invalid invite code." visible={formError}/>
            <View>
                <TextInput
                    onChangeText={(text)=>setCode(text)}
                    width={'100%'}
                    backgroundColor={defaultStyles.colors.white}
                    placeholder="Invite Code"
                    style={styles.field}
                    error={formError}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton onPress={onHandleJoin} title="Join"/>
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