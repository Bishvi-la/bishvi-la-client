import { useLocalSearchParams } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ProductDetails: FunctionComponent = () => {
  const { productName } = useLocalSearchParams<{ productName: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product: {productName}</Text>
      {/* Add other product details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  text: { fontSize: 16 },
});
