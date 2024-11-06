import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, ThemedText, ThemedView } from '@/components/core';
import { hebrewTranslations } from '@/translation/lang-heb';

export const MyListScreen = () => {
  const handleOnPress = () => {
    console.log('Creating a new list');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.messageText}>{hebrewTranslations.lists.noListMessage}</ThemedText>
        <ThemedText style={styles.subMessageText}>{hebrewTranslations.lists.subNoListMessage}</ThemedText>
        <Button title={hebrewTranslations.lists.createNewList} onPress={handleOnPress} size="large" fontSize="large" />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    // alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subMessageText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});
