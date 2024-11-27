import { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText, ThemedView } from '@/components/core';

interface NewListProps {
  listName: string;
}

export const NewList: FunctionComponent<NewListProps> = ({ listName }) => (
  <ThemedView style={styles.container}>
    <ThemedText>NewList</ThemedText>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
