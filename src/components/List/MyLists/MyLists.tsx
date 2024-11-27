import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ThemedText, ThemedView } from '@/components/core';
import { CustomModal } from '@/components/Modal/CustomModal';
import { SearchAndFilter } from '@/components/SearchAndFilter/SearchAndFilter';
import { Routes } from '@/src/types/routes';
import { hebrewTranslations } from '@/translation/lang-heb';

export const MyLists = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [lists, _setLists] = useState([]);
  const router = useRouter();

  const handleOnPress = () => {
    setModalVisible(true);
  };

  const handleCreateList = (listName: string) => {
    setModalVisible(false);
    router.navigate({ pathname: Routes.NewList, params: { listName } });
  };
  return (
    <>
      {!(lists.length === 0) && <SearchAndFilter placeholder={hebrewTranslations.search.searchListPlaceholder} />}
      <ThemedView style={styles.container}>
        <ThemedView style={styles.content}>
          <ThemedText style={styles.messageText}>{hebrewTranslations.lists.noListMessage}</ThemedText>
          <ThemedText style={styles.subMessageText}>{hebrewTranslations.lists.subNoListMessage}</ThemedText>
          <Button
            title={hebrewTranslations.lists.createNewList}
            onPress={handleOnPress}
            size="large"
            fontSize="large"
          />
        </ThemedView>

        {isModalVisible && (
          <CustomModal
            isVisible={isModalVisible}
            title={hebrewTranslations.lists.modal.title}
            placeholder={hebrewTranslations.lists.modal.placeholder}
            onClose={() => setModalVisible(false)}
            onConfirm={handleCreateList}
            confirmText={hebrewTranslations.lists.modal.confirm}
            cancelText={hebrewTranslations.lists.modal.cancel}
          />
        )}
      </ThemedView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
