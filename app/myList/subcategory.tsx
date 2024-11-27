import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Breadcrumb } from '@/src/components/Breadcrumb/Breadcrumb';
import { ListSubcategories } from '@/src/components/List/NewList/ListSubcategories';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export default function SubcategoriesScreen() {
  const backgroundColor = useThemeColor({}, 'background');
  const { categoryName, listName } = useLocalSearchParams<{ categoryName: string; listName: string }>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {categoryName && <Breadcrumb items={[categoryName]} />}
      <ListSubcategories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
