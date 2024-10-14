import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Animated, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useField } from 'formik';

import { ThemedView } from '../../ThemedView';

interface PasswordFieldProps {
  placeholder: string;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [iconOpacity] = useState(new Animated.Value(1));
  const [passwordMargin] = useState(new Animated.Value(20));

  const [field, meta] = useField('password');

  const toggleVisibility = () => {
    Animated.timing(iconOpacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsHidden(!isHidden);
      Animated.timing(iconOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
  };

  const animatePasswordMargin = (showError: boolean) => {
    Animated.timing(passwordMargin, {
      toValue: showError ? 45 : 20,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    animatePasswordMargin(!!meta.error && meta.touched);
  }, [meta.error, meta.touched]);

  return (
    <Animated.View style={[{ marginBottom: passwordMargin }, styles.animationContainer]}>
      <ThemedView style={[styles.container, meta.touched && meta.error ? styles.errorInput : null]}>
        <TouchableOpacity onPress={toggleVisibility} style={styles.iconContainer}>
          <Animated.View style={{ opacity: iconOpacity }}>
            <Ionicons name={isHidden ? 'eye-off' : 'eye'} size={24} color="gray" />
          </Animated.View>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={field.onChange('password')}
          onBlur={field.onBlur('password')}
          value={field.value}
          placeholder={placeholder}
          secureTextEntry={isHidden}
        />
      </ThemedView>
      {meta.touched && meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 15,
    height: 45,
    paddingRight: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    textAlign: 'right',
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 5,
    marginRight: 15,
  },
});
