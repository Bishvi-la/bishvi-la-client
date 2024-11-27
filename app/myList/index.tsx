import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/core';
import { HeaderLayout } from '@/components/HeaderLayout/HeaderLayout';
import { MyLists } from '@/components/List/MyLists/MyLists';

const myListScreen = () => (
  <ThemedView style={styles.container}>
    <HeaderLayout />
    <MyLists />
  </ThemedView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});

export default myListScreen;
