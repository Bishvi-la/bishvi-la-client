import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BreadcrumbProps {
  items: string[];
}

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ items }) => (
  <View style={styles.container}>
    {items.map((item, index) => (
      <Text key={index} style={styles.text}>
        {item}
        {index < items.length - 1 && <Text style={styles.separator}> → </Text>}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  separator: {
    fontSize: 14,
    color: '#999',
  },
});
