import React, {useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

import ErrorMessage from '../components/forms/ErrorMessage'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState()

  const handleSubmit = async (userInfo) => {
  }

  return (
    <>
      <Screen style={styles.container}>
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
  field:{
      flex:1
  }
});

export default RegisterScreen;
