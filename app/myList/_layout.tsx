import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import React from 'react';

import { MyListStackParamList } from '@/app/types';
import { HeaderLayout } from '@/components/HeaderLayout/HeaderLayout';
import { NewListProvider } from '@/src/context/NewListContext';
import { hebrewTranslations } from '@/translation/lang-heb';

export default function MyListLayout() {
  const { defaultNewListName } = hebrewTranslations.lists;

  return (
    <NewListProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="newList"
          options={{
            header: ({ route }: NativeStackHeaderProps) => {
              const params = route.params as MyListStackParamList['newList'];
              return <HeaderLayout shouldShowBackButton secureBack title={params?.listName || defaultNewListName} />;
            },
          }}
        />

        <Stack.Screen
          name="subcategory"
          options={{
            header: ({ route }: NativeStackHeaderProps) => {
              const params = route.params as MyListStackParamList['subcategory'];
              return <HeaderLayout shouldShowBackButton title={params?.listName || defaultNewListName} />;
            },
          }}
        />

        <Stack.Screen
          name="products"
          options={{
            header: ({ route }: NativeStackHeaderProps) => {
              const params = route.params as MyListStackParamList['products'];
              return <HeaderLayout shouldShowBackButton title={params?.listName || defaultNewListName} />;
            },
          }}
        />

        <Stack.Screen
          name="product-details"
          options={{
            header: ({ route }: NativeStackHeaderProps) => {
              const params = route.params as MyListStackParamList['product-details'];
              return (
                <HeaderLayout
                  shouldShowBackButton
                  title={params?.listName || hebrewTranslations.lists.defaultNewListName}
                />
              );
            },
          }}
        />
      </Stack>
    </NewListProvider>
  );
}
