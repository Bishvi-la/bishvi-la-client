import React from 'react';
import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/src/hooks/useThemeColor';

export interface ThemedViewProps extends ViewProps {
  lightColor?: string;
  darkColor?: string;
}

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View {...otherProps} style={[{ backgroundColor }, style]} />;
}
