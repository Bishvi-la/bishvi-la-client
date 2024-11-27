import React, { FunctionComponent, memo, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { ThemedText, ThemedView } from '@/components/core';

type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
  fontWeight?: 'normal' | 'bold' | '600' | '700';
  textColor?: string;
  isLoading?: boolean;
  delayPressIn?: number;
  lightColor?: string;
  darkColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shouldAnimateLeftIcon?: boolean;
  shouldAnimateRightIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = memo(
  ({
    title,
    onPress,
    color = 'primary',
    size = 'medium',
    fontSize = 'medium',
    fontWeight = 'normal',
    isLoading = false,
    delayPressIn = 250,
    textColor = '#ffffff',
    lightColor,
    darkColor,
    leftIcon,
    rightIcon,
    shouldAnimateLeftIcon = false,
    shouldAnimateRightIcon = false,
    disabled = false,
    style = {},
    textStyle = {},
  }) => {
    const leftIconAnimation = useRef(new Animated.Value(0)).current;
    const rightIconAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (shouldAnimateLeftIcon) {
        Animated.timing(leftIconAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
      if (shouldAnimateRightIcon) {
        Animated.timing(rightIconAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }, [shouldAnimateLeftIcon, shouldAnimateRightIcon, leftIconAnimation, rightIconAnimation]);

    const leftIconStyle = {
      opacity: leftIconAnimation,
      transform: [{ translateX: leftIconAnimation.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) }],
    };

    const rightIconStyle = {
      opacity: rightIconAnimation,
      transform: [{ translateX: rightIconAnimation.interpolate({ inputRange: [0, 1], outputRange: [10, 0] }) }],
    };

    const buttonStyles = [
      styles.button,
      // eslint-disable-next-line no-nested-ternary
      color === 'primary'
        ? styles.primary
        : // eslint-disable-next-line no-nested-ternary
          color === 'secondary'
          ? styles.secondary
          : color === 'tertiary'
            ? styles.tertiary
            : styles.transparent,
      // eslint-disable-next-line no-nested-ternary
      size === 'small' ? styles.small : size === 'large' ? styles.large : styles.medium,
      style,
    ];

    const buttonTextStyles: TextStyle[] = [
      styles.text,
      { color: textColor, fontWeight },
      // eslint-disable-next-line no-nested-ternary
      fontSize === 'small' ? styles.fontSizeSmall : fontSize === 'large' ? styles.fontSizeLarge : styles.fontSizeMedium,
      textStyle,
    ];

    return (
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyles}
        delayPressIn={delayPressIn}
        disabled={disabled || isLoading}
      >
        <ThemedView style={styles.container} lightColor={lightColor} darkColor={darkColor}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <View style={styles.content}>
              {leftIcon && (
                <Animated.View style={shouldAnimateLeftIcon ? leftIconStyle : undefined}>
                  <View style={styles.icon}>{leftIcon}</View>
                </Animated.View>
              )}
              <ThemedText type="default" style={buttonTextStyles}>
                {title}
              </ThemedText>
              {rightIcon && (
                <Animated.View style={shouldAnimateRightIcon ? rightIconStyle : undefined}>
                  <View style={styles.icon}>{rightIcon}</View>
                </Animated.View>
              )}
            </View>
          )}
        </ThemedView>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) =>
    prevProps.disabled === nextProps.disabled &&
    prevProps.title === nextProps.title &&
    prevProps.onPress === nextProps.onPress,
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  primary: {
    backgroundColor: '#5BABB5',
  },
  secondary: {
    backgroundColor: '#94D1D6',
  },
  tertiary: {
    backgroundColor: '#cccccc',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  small: {
    height: 20,
  },
  medium: {
    height: 40,
  },
  large: {
    height: 60,
  },
  fontSizeSmall: {
    fontSize: 16,
    lineHeight: 22,
  },
  fontSizeMedium: {
    fontSize: 22,
    lineHeight: 25,
  },
  fontSizeLarge: {
    fontSize: 34,
    lineHeight: 40,
  },
  text: {
    color: '#fff',
    backgroundColor: 'transparent',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
});
