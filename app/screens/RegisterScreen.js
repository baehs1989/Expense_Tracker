import React, {useState} from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import ErrorMessage from '../components/forms/ErrorMessage'
import firebase from '../firebase/firebase';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState()

  const handleSubmit = async (userInfo) => {
    console.log(userInfo)
    firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password).then(user=>{
      firebase.firestore().collection("User").doc(user.user.uid).set({
        email:userInfo.email,
        name:userInfo.name,
        uid:user.user.uid
      })
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

  return (
    <>
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error}/>
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
            style={styles.field}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
            style={styles.field}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            style={styles.field}
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  field:{
      flex:1
  }
});

export default RegisterScreen;
