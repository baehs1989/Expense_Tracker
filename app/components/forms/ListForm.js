import React from 'react';
import {StyleSheet, View, TouchableOpacity, Keyboard} from 'react-native';
import {Formik} from 'formik';
import * as Yup from "yup";

import {FormField, SubmitButton} from './'
import Screen from '../Screen'
import FormFlatPicker from '../forms/FormFlatPicker'
import FormDatePicker from '../forms/FormDatePicker'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    repeat: Yup.string().required().label('Repeat'),
    startdate: Yup.string().required().label('Start Date')
});


const categories = [
    {
        label: "Monthly",
        value: 0,
    },
    {
        label: "One time",
        value: 1,
    }
];

function ListForm({onSubmit}){
  return (
      <Screen>
        <Formik
            initialValues={{ name: "", repeat:"", startdate:"" }}
            onSubmit={()=>console.log("Submit")}
            validationSchema={validationSchema}
        >
            {() => 
                <>
                    <TouchableOpacity activeOpacity={1} style={styles.container} onPressIn={Keyboard.dismiss}>
                        <View>
                            <FormField
                                autoCorrect={false}
                                name="name"
                                placeholder="Name"
                                style={styles.field}
                            />

                            <FormFlatPicker
                                items={categories}
                                name="repeat"
                                placeholder="Repeat"
                                onSelectItem={(item) => setFieldValue(name, item)}
                                style={styles.field}
                            />

                            <FormDatePicker
                                name="startdate"
                                placeholder="Start Date"
                                onSelectItem={(item) => setFieldValue(name, item)}
                                style={styles.field}
                            />
                        </View>



                        <View style={styles.buttonContainer}>
                            <SubmitButton title="Add" />
                        </View>
                    </TouchableOpacity>
                </>
            }

        </Formik>
      </Screen>

  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column', 
        flex:1,
        justifyContent:"space-between"
    },
    buttonContainer:{
    },
    field:{
        flex:1
    }
});

export default ListForm;