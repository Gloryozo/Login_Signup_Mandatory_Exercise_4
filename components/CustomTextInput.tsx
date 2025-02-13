import { View, TextInput, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: keyof typeof FontAwesome.glyphMap;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCapitalize?: string;
}

const CustomTextInput = ({ 
  label, 
  value, 
  onChangeText, 
  icon, 
  secureTextEntry = false 
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      {/* Input Field - Bottom layer but interactive */}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        cursorColor="#2563eb"
        placeholder=""
        editable={true}
        autoCorrect={false}
        autoCapitalize="none"
      />

      {/* Visual Elements - Top layer but non-interactive */}
      {icon && (
        <FontAwesome
          name={icon}
          size={20}
          color={isFocused ? '#2563eb' : '#666'}
          style={styles.icon}
        />
      )}
      
      <Text style={[
        styles.label,
        (isFocused || value) && styles.labelFocused
      ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 56,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    justifyContent: 'center',
  },
  focusedContainer: {
    borderColor: '#e5e7eb',
   
  },
  icon: {
    position: 'absolute',
    left: 16,
    zIndex: 2,
  },
  label: {
    position: 'absolute',
    left: 48,
    fontSize: 16,
    color: '#666',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    zIndex: 2,
  },
  labelFocused: {
    top: -8,
    fontSize: 12,
    color: '#2563eb',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
    paddingHorizontal: 44, // Space for icon + padding
    paddingVertical: 16,
    zIndex: 1, // Behind label/icon but interactive
  },
});

export default CustomTextInput;

