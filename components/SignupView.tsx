
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';// Import core React Native components and React hooks
// Custom reusable input component
import CustomTextInput from './CustomTextInput'; 
import React from 'react';
// Custom button component (Note: Typo in 'Button' filename should be fixed)
import Button from './Button';
import { useState } from 'react';

// Type definition for component props
interface SignupViewProps {
  onSwitchToLogin: () => void; // Navigation callback to switch to login screen
}

const SignupView = ({ onSwitchToLogin }: SignupViewProps) => {
  // State management for form fields
  const [fullName, setFullName] = useState(''); // User's full name input
  const [email, setEmail] = useState(''); // Email input
  const [password, setPassword] = useState(''); // Password input
  const [confirmPassword, setConfirmPassword] = useState(''); // Password confirmation

  return (
    <View style={styles.container}>
      {/* Back navigation button with custom styling */}
      <TouchableOpacity 
        onPress={onSwitchToLogin} 
        style={styles.backButton}
        accessibilityLabel="Go back to login"
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Main form title */}
      <Text style={styles.title}>Create Account</Text>

      {/* Form Inputs Section */}
      <CustomTextInput 
        label="Full Name"
        icon="user"
        value={fullName}
        onChangeText={setFullName}
         />

      <CustomTextInput 
        label="Email"
        icon="envelope"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomTextInput 
        label="Password"
        icon="lock"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomTextInput 
        label="Confirm Password"
        icon="lock"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Form Submission Button */}
      <Button
        title="Sign Up"
        onPress={() => Alert.alert('Sign up button clicked')}
      />

      {/* Existing account prompt */}
      <TouchableOpacity 
        onPress={onSwitchToLogin}
        style={styles.linkContainer}
        accessibilityRole="button"
      >
        <Text style={styles.linkText}>Already have an account? </Text>
        <Text style={[styles.linkText, styles.linkHighlight]}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style definitions for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -100,//reduce the margin from the back button to the container
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 10, // Space above title from top
    marginBottom: 30,
    alignSelf: 'flex-start', // Aligns text to left
    paddingLeft: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    
  },
  backText: {
    color: '#2563eb',
    fontSize: 50,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 50,// Space above backText from top
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  linkText: {
    color: '#666',
    fontSize: 14,
    paddingTop: 100,
    paddingBottom: 20,
  },
  linkHighlight: {
    color: 'orange',
    fontWeight: '800',
  },
});

export default SignupView;