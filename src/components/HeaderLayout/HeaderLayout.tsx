import { Ionicons } from '@expo/vector-icons';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackButton from '@/components/BackButton/BackButton';
import { ThemedView } from '@/components/core';

interface HeaderLayoutProps {
  title?: string;
  shouldShowBackButton?: boolean;
  shouldShowMenuButton?: boolean;
  secureBack?: boolean;
}

export const HeaderLayout: FunctionComponent<PropsWithChildren<HeaderLayoutProps>> = ({
  title = '',
  shouldShowBackButton = false,
  secureBack = false,
  shouldShowMenuButton = true,
  children,
}) => (
  <ThemedView style={styles.headerContainer}>
    {/* Back Button */}
    {shouldShowBackButton && (
      <View style={styles.leftContainer}>
        <BackButton secureBack={secureBack} />
      </View>
    )}

    {/* Title */}
    {title && <Text style={styles.headerTitle}>{title}</Text>}

    {/* Menu Button */}
    <View style={styles.rightContainer}>
      {shouldShowMenuButton && (
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      )}
    </View>
    {children && children}
  </ThemedView>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#94D1D6',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'relative',
  },
  leftContainer: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  rightContainer: {
    position: 'absolute',
    right: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
