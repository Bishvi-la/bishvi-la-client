import React, { useState, useCallback } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInputProps,
} from 'react-native';
import { debounce } from 'lodash';

interface Suggestion {
  properties: {
    place_id: string;
    formatted: string;
  };
}

interface AutocompleteProps extends TextInputProps {
  onSelect: (address: string) => void;
  apiKey: string;
  placeholder: string;
  field: string;
  touched?: boolean;
  errors?: string;
  setFieldValue: (field: string, value: any) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onSelect,
  apiKey,
  placeholder,
  field,
  touched,
  errors,
  setFieldValue,
  value,
  onBlur,
  onChangeText,
}) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (query: string) => {
    setLoading(true);
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&lang=he&apiKey=${apiKey}`,
    );
    const data = await response.json();
    setLoading(false);
    return data.features as Suggestion[];
  };

  const handleFetchSuggestions = useCallback(
    debounce(async (text: string) => {
      if (text.length > 2) {
        const results = await fetchSuggestions(text);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    }, 300),
    [],
  );

  const handleAddressChange = (text: string) => {
    onChangeText?.(text);
    setFieldValue(field, text);
    handleFetchSuggestions(text);
  };

  const renderSuggestionItem = ({ item }: { item: Suggestion }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => {
        onSelect(item.properties.formatted);
        setSuggestions([]);
      }}
    >
      <Text style={styles.suggestionText}>{item.properties.formatted}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.fieldWrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={handleAddressChange}
          style={[styles.input, touched && errors ? styles.errorInput : null]}
          value={value}
          onBlur={onBlur}
        />
        {loading && <ActivityIndicator style={styles.loader} size="small" color="#999" />}
      </View>
      {suggestions?.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.properties.place_id}
          renderItem={renderSuggestionItem}
          style={styles.suggestionsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    left: 25,
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    padding: 8,
    textAlign: 'right',
    marginTop: 6,
    borderColor: '#999999',
    paddingRight: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  suggestionsContainer: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    maxHeight: 150,
    marginTop: 5,
    width: '100%',
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  suggestionText: {
    textAlign: 'right',
  },
  fieldWrapper: {
    width: 350,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
