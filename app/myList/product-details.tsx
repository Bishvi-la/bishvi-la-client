import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { ProductDetails } from '@/src/components/List/NewList/ProductDetails';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function ProductDetailsScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ProductDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
