import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Routes } from '@/src/types/routes';

const subcategories = [
  { id: '1', name: 'Subcategory 1' },
  { id: '2', name: 'Subcategory 2' },
];

export const ListSubcategories: FunctionComponent = () => {
  const { categoryName } = useLocalSearchParams<{ categoryName: string }>();
  const router = useRouter();

  const handlePress = (subcategory: { name: string }) => {
    router.push({ pathname: Routes.Products, params: { subcategoryName: subcategory.name } });
  };

  return (
    <FlatList
      data={subcategories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
          <Text style={styles.text}>{item.name}</Text>
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
