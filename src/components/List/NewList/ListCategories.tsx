import { useRouter } from 'expo-router';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { categoryIcons } from '@/constants/categoryIcons';
import { Routes } from '@/src/types/routes';

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: '1', name: 'baby-carriage' },
  { id: '2', name: 'onesie' },
  { id: '3', name: 'baby-bottle' },
  { id: '4', name: 'baby-car-seat' },
  { id: '5', name: 'baby-chair' },
  { id: '6', name: 'baby' },
  { id: '7', name: 'cot' },
  { id: '8', name: 'bath' },
  { id: '9', name: 'bouncer' },
  { id: '10', name: 'delivery' },
  { id: '11', name: 'diapers' },
  { id: '12', name: 'gate' },
  { id: '13', name: 'giftbox' },
  { id: '14', name: 'toy-train' },
  { id: '15', name: 'pregnant' },
];

export const ListCategories: FunctionComponent = () => {
  const router = useRouter();

  const handlePress = (category: Category) => {
    router.push({ pathname: Routes.Subcategory, params: { categoryName: category.name } });
  };

  const renderItem = ({ item }: { item: Category }) => {
    const IconComponent = categoryIcons[item.name]; // Dynamically get the SVG component

    return (
      <TouchableOpacity style={styles.category} onPress={() => handlePress(item)}>
        <View style={styles.iconContainer}>{IconComponent ? <IconComponent width={100} height={100} /> : null}</View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    margin: 30,
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#5BABB5',
    width: 120,
    height: 120,
    justifyContent: 'center',
    backgroundColor: '#E7F6F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});
