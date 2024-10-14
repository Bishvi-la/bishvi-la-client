import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Text, Animated } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { hebrewTranslations } from '@/src/translation/lang-heb';
import { ThemedView } from '../../ThemedView';
import { ThemedText } from '../../ThemedText';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(hebrewTranslations.login.validation.invalidEmail)
    .required(hebrewTranslations.login.validation.require),

  password: Yup.string()
    .min(6, hebrewTranslations.login.validation.passwordMin)
    .required(hebrewTranslations.login.validation.require),
});

export const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(1));

  const toggleVisibility = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsHidden(!isHidden);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
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

            <ThemedView style={styles.fieldWrapper}>
              <ThemedText style={styles.label}>{hebrewTranslations.login.password}</ThemedText>
              <ThemedView
                style={[styles.passwordContainer, touched.password && errors.password ? styles.errorInput : null]}
              >
                <ThemedView style={styles.passwordInputContainer}>
                  <TouchableOpacity onPress={toggleVisibility} style={[styles.iconContainer, { opacity: fadeAnim }]}>
                    <Ionicons name={isHidden ? 'eye-off' : 'eye'} size={24} color="gray" />
                  </TouchableOpacity>
                  <TextInput
                    autoComplete="password"
                    style={[styles.passwordInput, touched.password && errors.password ? styles.errorInput : null]}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={isHidden}
                    placeholder={hebrewTranslations.login.placeholders.password}
                  />
                </ThemedView>

                <ThemedView
                  style={[styles.passwordErrorText, { opacity: touched.password && errors.password ? 1 : 0 }]}
                >
                  <ThemedText style={styles.errorText}>{errors.password}</ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
              <ThemedText style={styles.buttonText}>{hebrewTranslations.login.login}</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

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
  button: {
    backgroundColor: '#5BABB5',
    width: '100%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 45,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: 40,
    fontSize: 32,
  },
});
