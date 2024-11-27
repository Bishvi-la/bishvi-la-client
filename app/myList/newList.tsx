import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/core';
import { ListCategories } from '@/components/List/NewList/ListCategories';

interface ListProps {
  listName: string;
}

const newList: FunctionComponent<ListProps> = ({ listName }) => (
  <ThemedView style={styles.container}>
    <ListCategories />
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default newList;
