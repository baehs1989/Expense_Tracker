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
import ErrorMessage from './ErrorMessage'

const types = [
    {
        id:'onetime',
        label:'One Time Event'
    },
    {
        id:'monthly',
        label:'Monthly Event'
    }
]


function GroupForm({onSubmit}){
  const [typeModal, setTypeModal]= useState(false)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedLabel, setSelectedLabel] = useState(null)
  const [title, setTitle] = useState(null)
  const [formError, setFormError] = useState(false);

  const onTypeSelect = (id,label) => {
    setSelectedType(id)
    setSelectedLabel(label)
  }

  const onHandleSubmit = () => {
    if (title && selectedType) {
        onSubmit({title, type:selectedType})
        return
    }
    setFormError(true)
  }

  return (
    <Screen>
        <View>
            <ErrorMessage error="Please fill in all missing fields." visible={formError && (!title || !selectedType)}/>
            <View>
                <TextInput
                    onChangeText={(text)=>setTitle(text)}
                    width={'100%'}
                    backgroundColor={defaultStyles.colors.white}
                    placeholder="Title"
                    style={styles.field}
                    value={title}
                    error={formError&&!title}
                />
            </View>
            <View>
                <Picker
                    // onSelectItem={(item) => setFieldValue(name, item)}
                    onPress={()=>setTypeModal(true)}
                    placeholder={"Please select the type"}
                    selectedItem={selectedLabel?{label:selectedLabel}:null}
                    width={'100%'}
                    error={formError && !selectedType}
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
                <AppButton onPress={onHandleSubmit} title="Create"/>
            </View>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
    },
    field:{
        flex:1
    }

});

export default GroupForm;