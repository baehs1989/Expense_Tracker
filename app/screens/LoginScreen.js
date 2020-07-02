import React, { useState} from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton, ErrorMessage } from "../components/forms";
import firebase from '../firebase/firebase';
import userAuth from '../auth/userAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false)
  const {logIn} = userAuth()

  const handleSubmit = async ({email, password}) =>{
    firebase.auth().signInWithEmailAndPassword(email, password).then(user=>{
        firebase.firestore().collection("User").doc(user.user.uid).get().then(function(doc){
            logIn(doc.data())
        })
    }).catch(error=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
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
        <SubmitButton title="Login" />
      </Form>
    </Screen>
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

export default LoginScreen;
