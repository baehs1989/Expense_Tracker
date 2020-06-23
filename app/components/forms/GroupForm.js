import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';

import Screen from '../Screen'
import TextInput from '../TextInput'
import AppButton from '../Buttons/AppButton'
import Picker from '../Picker'
import defaultStyles from '../../config/styles'
import AppText from '../AppText';
import AppModal from '../AppModal';
import FilterModal from '../FilterModal'

const types = [
    {
        id:'oneTime',
        label:'One Time Event'
    },
    {
        id:'Monthly',
        label:'Monthly Event'
    }
]


function GroupForm(props){
  const [typeModal, setTypeModal]= useState(false)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedLabel, setSelectedLabel] = useState(null)

  const onTypeSelect = (id,label) => {
    setSelectedType(id)
    setSelectedLabel(label)
}

  return (
    <Screen>
        <View>
            <View>
                <TextInput
                    onChangeText={()=>console.log("Change")}
                    width={'100%'}
                    backgroundColor={defaultStyles.colors.white}
                    placeholder="Title"
                    style={styles.field}
                />
            </View>
            <View>
                <Picker
                    // onSelectItem={(item) => setFieldValue(name, item)}
                    onPress={()=>setTypeModal(true)}
                    placeholder={"Please select the type"}
                    selectedItem={selectedLabel?{label:selectedLabel}:null}
                    width={'100%'}
                />
            </View>

            <FilterModal
                selected={selectedType}
                visible={typeModal}
                filters = {types}
                onSelect = {onTypeSelect}
                onCancel = {()=>setTypeModal(false)}
                onOk = {()=>setTypeModal(false)}
            />

            <View style={styles.buttonContainer}>
                <AppButton title="Create"/>
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

export default GroupForm;