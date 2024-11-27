import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { ProductList } from '@/components/List/NewList/ProductList';
import { Breadcrumb } from '@/src/components/Breadcrumb/Breadcrumb';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function ProductsScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const { categoryName, subcategoryName, listName } = useLocalSearchParams<{
    categoryName: string;
    subcategoryName: string;
    listName: string;
  }>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {listName && <Breadcrumb items={[listName, categoryName || '', subcategoryName || '']} />}
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
