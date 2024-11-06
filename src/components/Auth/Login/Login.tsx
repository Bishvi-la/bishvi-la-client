import { Formik } from 'formik';
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import * as Yup from 'yup';

import { Button, ThemedText, ThemedView } from '@/components/core';
import { PasswordField } from '@/components/PasswordField/PasswordField';
import { hebrewTranslations } from '@/src/translation/lang-heb';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(hebrewTranslations.login.validation.invalidEmail)
    .required(hebrewTranslations.login.validation.require),

  password: Yup.string()
    .min(6, hebrewTranslations.login.validation.passwordMin)
    .required(hebrewTranslations.login.validation.require),
});

export const Login = () => (
  <SafeAreaView style={styles.container}>
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => console.log('values ->', values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ThemedView style={styles.formContainer}>
          <ThemedView style={styles.fieldWrapper}>
            <ThemedText style={styles.label}>{hebrewTranslations.login.email}</ThemedText>
            <TextInput
              autoComplete="email"
              style={[styles.input, touched.email && errors.email ? styles.errorInput : null]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder={hebrewTranslations.login.placeholders.email}
            />
            <ThemedView style={{ opacity: touched.email && errors.email ? 1 : 0 }}>
              <ThemedText style={styles.errorText}>{errors.email}</ThemedText>
            </ThemedView>
          </ThemedView>

          {/* Password */}
          <View style={styles.fieldWrapper}>
            <ThemedText style={styles.label}>{hebrewTranslations.login.password}</ThemedText>
            <PasswordField placeholder={hebrewTranslations.login.placeholders.password} />
          </View>

          <Button
            title={hebrewTranslations.login.login}
            onPress={() => handleSubmit()}
            color="primary"
            size="large"
            fontSize="large"
          />
        </ThemedView>
      )}
    </Formik>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    alignItems: 'flex-end',
  },
  fieldWrapper: {
    width: 350,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'right',
    fontWeight: '400',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    padding: 8,
    textAlign: 'right',
    marginTop: 6,
    borderColor: '#999999',
    paddingRight: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 5,
  },
  passwordErrorText: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 15,
    height: 40,
    marginTop: 6,
  },
  passwordInputContainer: {
    flexDirection: 'row',
  },
  passwordInput: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'right',
  },
  iconContainer: {
    paddingHorizontal: 10,
    paddingLeft: 25,
    paddingTop: 6,
  },
});
