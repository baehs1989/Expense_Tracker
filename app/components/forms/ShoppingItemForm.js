import React from 'react';
import {StyleSheet, View, TouchableOpacity, Keyboard} from 'react-native';
import {Formik} from 'formik';
import * as Yup from "yup";

import {FormField, SubmitButton} from './'
import Screen from '../Screen'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    quantity: Yup.number().required().label("Quantity"),
    note: Yup.string().label("Note"),
});

function ShoppingItemForm({onSubmit}){
  return (
      <Screen>
        <Formik
            initialValues={{ name: "", quantity: "", note: "" }}
            onSubmit={()=>onSubmit()}
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
                            <FormField
                                autoCorrect={false}
                                name="quantity"
                                placeholder="Quantity"
                                keyboardType="numeric"
                                style={styles.field}
                            />
                            <FormField
                                autoCorrect={false}
                                name="note"
                                placeholder="Note"
                                style={{height:100}}
                                multiline={true}
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

export default ShoppingItemForm;