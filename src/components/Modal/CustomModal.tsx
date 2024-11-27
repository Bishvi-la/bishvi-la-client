import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { Modal, StyleSheet, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Button, ThemedText, ThemedView } from '@/components/core';
import { hebrewTranslations } from '@/translation/lang-heb';

interface CustomModalProps {
  isVisible: boolean;
  title: string;
  subtitle?: string;
  placeholder?: string;
  onClose: () => void;
  onConfirm: (inputValue: string) => void;
  confirmText?: string;
  cancelText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  confirmButtonStyle?: ViewStyle;
  cancelButtonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  title,
  subtitle,
  placeholder = 'Enter value',
  onClose,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  showConfirmButton = true,
  showCancelButton = true,
  showCloseButton = true,
  confirmButtonStyle,
  cancelButtonStyle,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  const [inputValue, setInputValue] = useState(hebrewTranslations.lists.defaultNewListName);

  const handleConfirm = useCallback(() => {
    // before acception new name, we should check if the name is already taken,
    // If yes, we want to add "New list 1" or something like this...
    // Or, tell the user that the name of the list is already taken.
    onConfirm(inputValue);
    setInputValue('');
  }, [inputValue, onConfirm]);

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <ThemedView style={[styles.modalOverlay, containerStyle]}>
        <ThemedView style={styles.modalContainer}>
          {showCloseButton && (
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          )}
          <ThemedText style={[styles.modalTitle, titleStyle]}>{title}</ThemedText>
          {subtitle && <ThemedText style={[styles.modalSubtitle, subtitleStyle]}>{subtitle}</ThemedText>}
          <TextInput style={styles.input} placeholder={placeholder} value={inputValue} onChangeText={setInputValue} />
          <View style={styles.buttonContainer}>
            {showConfirmButton && (
              <Button
                title={confirmText}
                onPress={handleConfirm}
                size="medium"
                fontSize="medium"
                style={[styles.confirmButton, confirmButtonStyle, !inputValue && styles.disabledButton]}
                disabled={!inputValue}
                fontWeight={'600'}
              />
            )}
            {showCancelButton && (
              <Button
                title={cancelText}
                onPress={onClose}
                size="medium"
                fontSize="medium"
                style={[styles.cancelButton, cancelButtonStyle]}
                textColor={'#5BABB5'}
              />
            )}
          </View>
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 35,
    backgroundColor: '#f9f9f9',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#5BABB5',
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#c3bcbc',
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    borderColor: '#5BABB5',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
  },
});
