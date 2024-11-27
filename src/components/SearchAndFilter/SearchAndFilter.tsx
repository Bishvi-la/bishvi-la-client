import { Ionicons } from '@expo/vector-icons';
import React, { FunctionComponent } from 'react';
import { I18nManager, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { hebrewTranslations } from '@/translation/lang-heb';

interface SearchAndFilterProps {
  placeholder?: string;
}

export const SearchAndFilter: FunctionComponent<SearchAndFilterProps> = ({ placeholder }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.filterButton}>
      <Ionicons name="filter" size={20} color="#fff" />
    </TouchableOpacity>

    <View style={styles.searchContainer}>
      <TextInput
        placeholder={placeholder || hebrewTranslations.search.defaultPlaceholder}
        style={[styles.input, I18nManager.isRTL && styles.inputRTL]}
      />
      <Ionicons name="search" size={20} color="#666" style={styles.icon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchContainer: {
    flexDirection: 'row-reverse',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    height: 40,
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  inputRTL: {
    textAlign: 'right',
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#94D1D6',
    padding: 10,
    borderRadius: 8,
  },
});
