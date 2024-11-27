import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Routes } from '@/src/types/routes';

const products = [
  { id: '1', name: 'Product 1', price: '$10' },
  { id: '2', name: 'Product 2', price: '$20' },
];

export const ProductList: FunctionComponent = () => {
  const { subcategoryName } = useLocalSearchParams<{ subcategoryName: string }>();
  const router = useRouter();

  const handlePress = (product: { name: string }) => {
    router.push({ pathname: Routes.ProductDetails, params: { productName: product.name } });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
          <Text style={styles.text}>
            {item.name} - {item.price}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  item: { padding: 16, marginVertical: 8, backgroundColor: '#ddd', borderRadius: 8 },
  text: { fontSize: 16 },
});
