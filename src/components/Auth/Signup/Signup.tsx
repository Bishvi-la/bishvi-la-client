import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Text, Animated } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Constants from 'expo-constants';

import { hebrewTranslations } from '@/src/translation/lang-heb';
import { Autocomplete } from '../../Autocomplete/Autocomplete';
import { ThemedView } from '../../ThemedView';
import { ThemedText } from '../../ThemedText';
import { PasswordField } from './PasswordField';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(hebrewTranslations.signup.validation.require)
    .min(2, hebrewTranslations.signup.validation.fullNameMin),
  email: Yup.string()
    .email(hebrewTranslations.signup.validation.invalidEmail)
    .required(hebrewTranslations.signup.validation.require),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.,%*?&])[A-Za-z\d@$.,!%*?&]{8,16}$/,
      hebrewTranslations.signup.validation.passwordRegex,
    )
    .min(6, hebrewTranslations.signup.validation.passwordMin)
    .max(16, hebrewTranslations.signup.validation.passwordMax)
    .required(hebrewTranslations.signup.validation.require),
  phoneNumber: Yup.string()
    .min(9, hebrewTranslations.signup.validation.phoneNumberMin)
    .max(15, hebrewTranslations.signup.validation.phoneNumberMax)
    .matches(/^\+?[0-9]{9,15}$/, hebrewTranslations.signup.validation.phoneNumberRegex),
  deliveryAddress: Yup.string(),
});

export const Signup = () => {
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
        validationSchema={SignupSchema}
        initialValues={{ fullName: '', email: '', password: '', phoneNumber: '', deliveryAddress: '' }}
        onSubmit={(values) => console.log('values ->', values)}
      >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
          <ThemedView style={styles.formContainer}>
            {/* Full Name */}
            <ThemedView style={styles.fieldWrapper}>
              <ThemedText style={styles.label}>* {hebrewTranslations.signup.fullName}</ThemedText>
              <TextInput
                style={[styles.input, touched.fullName && errors.fullName ? styles.errorInput : null]}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                placeholder={hebrewTranslations.signup.placeholders.fullName}
              />
              <ThemedView style={{ opacity: touched.fullName && errors.fullName ? 1 : 0 }}>
                <ThemedText style={styles.errorText}>{errors.fullName}</ThemedText>
              </ThemedView>
            </ThemedView>

            {/* Email */}
            <ThemedView style={styles.fieldWrapper}>
              <ThemedText style={styles.label}>* {hebrewTranslations.signup.email}</ThemedText>
              <TextInput
                style={[styles.input, touched.email && errors.email ? styles.errorInput : null]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={hebrewTranslations.signup.placeholders.email}
                autoCapitalize="none"
              />
              <ThemedView style={{ opacity: touched.email && errors.email ? 1 : 0 }}>
                <ThemedText style={styles.errorText}>{errors.email}</ThemedText>
              </ThemedView>
            </ThemedView>

            {/* Password */}
            <View style={styles.fieldWrapper}>
              <Text style={styles.label}>* {hebrewTranslations.signup.password}</Text>
              <PasswordField placeholder={hebrewTranslations.signup.placeholders.password} />
            </View>

            {/* Phone Number */}
            <ThemedView style={styles.fieldWrapper}>
              <ThemedText style={styles.label}>{hebrewTranslations.signup.phoneNumber}</ThemedText>
              <TextInput
                style={[styles.input, touched.phoneNumber && errors.phoneNumber ? styles.errorInput : null]}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                placeholder={hebrewTranslations.signup.placeholders.phoneNumber}
              />
              <ThemedView style={{ opacity: touched.phoneNumber && errors.phoneNumber ? 1 : 0 }}>
                <ThemedText style={styles.errorText}>{errors.phoneNumber}</ThemedText>
              </ThemedView>
            </ThemedView>

            {/* Delivery Address Autocomplete */}
            <ThemedView style={styles.fieldWrapper}>
              <ThemedText style={styles.label}>{hebrewTranslations.signup.deliveryAddress}</ThemedText>
              <Autocomplete
                apiKey={Constants.manifest2.extra.expoClient.extra.GEOAPIFY_API_KEY}
                placeholder={hebrewTranslations.signup.placeholders.deliveryAddress}
                onSelect={(address) => setFieldValue('deliveryAddress', address)}
                field="deliveryAddress"
                setFieldValue={setFieldValue}
                value={values.deliveryAddress}
                touched={touched.deliveryAddress}
                errors={errors.deliveryAddress}
                onChangeText={handleChange('deliveryAddress')}
                onBlur={handleBlur('deliveryAddress')}
              />
              <ThemedView style={{ opacity: touched.deliveryAddress && errors.deliveryAddress ? 1 : 0 }}>
                <ThemedText style={styles.errorText}>{errors.deliveryAddress}</ThemedText>
              </ThemedView>
            </ThemedView>

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
              <ThemedText style={styles.buttonText}>{hebrewTranslations.signup.createAnAccount}</ThemedText>
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
