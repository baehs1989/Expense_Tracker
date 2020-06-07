import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from "yup";

import {FormField, SubmitButton} from './forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    quantity: Yup.number().required().label("Quantity"),
    note: Yup.string().label("Note"),
});

function ShoppingItemForm(props){
  return (
      <Screen>
        <Formik
            initialValues={{ name: "", quantity: "", note: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            {() => 
                <>
                    <View style={styles.container}>
                        <View>
                            <FormField
                                autoCorrect={false}
                                name="name"
                                placeholder="Name"
                            />
                            <FormField
                                autoCorrect={false}
                                name="quantity"
                                placeholder="Quantity"
                                keyboardType="numeric"
                            />
                            <FormField
                                autoCorrect={false}
                                name="note"
                                placeholder="Note"
                                style={{height:100}}
                                multiline={true}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <SubmitButton title="Add" />
                        </View>
                    </View>
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
    }
});

export default ShoppingItemForm;