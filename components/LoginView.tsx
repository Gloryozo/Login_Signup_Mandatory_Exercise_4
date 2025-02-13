import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomTextInput from './CustomTextInput';
import React from 'react';
import { useState } from 'react';
import Button from './Button';

// Define props type for component communication
interface LoginViewProps {
  onSwitchToSignup: () => void; // Navigation callback to switch views
}

const LoginView = ({ onSwitchToSignup }: LoginViewProps) => {
  // State management for form inputs
  const [email, setEmail] = useState(''); // Stores user email input
  const [password, setPassword] = useState(''); // Stores password input

  return (
    <View style={styles.container}>
      {/* Header section */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>

      {/* Email input with envelope icon */}
      <CustomTextInput 
        label="Email"
        icon="envelope" // Visual indicator for email field
        value={email}
        onChangeText={setEmail} // Updates email state on typing
      />

      {/* Secure password input with lock icon */}
      <CustomTextInput 
        label="Password"
        icon="lock" // Security visual indicator
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Masks password characters
      />

      {/* Primary action button */}
      <Button 
        title="Login"
        onPress={() => Alert.alert('Login button clicked')} // Temporary placeholder
      />

      {/* Switch to signup view link */}
      <TouchableOpacity 
        onPress={onSwitchToSignup} // Triggers parent navigation
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Don't have an account? </Text>
        <Text style={[styles.linkText, styles.linkHighlight]}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style definitions for visual consistency
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers form vertically
    alignItems: 'center', // Centers form horizontally
    padding: 24, // Comfortable spacing around edges
    backgroundColor: 'white', // Clean white background
  },
  title: {
    fontSize: 32, // Prominent header size
    fontWeight: 'bold', // Emphasizes "Login" text
    color: '#1a1a1a', // High contrast for readability
    marginTop: 100, // Space above title from top
    marginBottom: 8, // Space between title and subtitle
    alignSelf: 'flex-start', // Aligns text to left
    paddingLeft: 20,//add padding from left
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // Subtle secondary text
    marginBottom: 30, // Separation before form inputs
    alignSelf: 'flex-start', // Aligns text to left
    paddingLeft: 20,
  },
  linkContainer: {
    flexDirection: 'row', // Aligns text inline
    marginTop: 24, // Space above signup prompt
   },
  linkText: {
    color: '#666', // Matching subtitle color
    fontSize: 14, // Slightly smaller than subtitle
    paddingTop: 150, // increase the space at the top of the link text
    paddingBottom: 10,
    
  },
  linkHighlight: {
    color: 'orange', // Interactive element accent
    fontWeight: '800', // Makes "Sign up" stand out
  },
});

export default LoginView;