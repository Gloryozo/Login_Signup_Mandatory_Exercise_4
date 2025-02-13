import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import React from 'react';
import Button from './Botton'; // Ensure that the Button component exists in the same directory
import { useState } from 'react';

interface SignupViewProps {
  onSwitchToLogin: () => void;
}

const SignupView = ({ onSwitchToLogin }: SignupViewProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSwitchToLogin} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>

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

      <Button
        title="Sign Up"
        onPress={() => Alert.alert('Sign up button clicked')}
      />
        <TouchableOpacity 
              onPress={onSwitchToLogin}
              style={styles.linkContainer}
            >
              <Text style={styles.linkText}>Already have an account? </Text>
              <Text style={[styles.linkText, styles.linkHighlight]}>Sign in</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 40,
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
    paddingTop: 2,
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  linkText: {
    color: '#666',
    fontSize: 14,
  },
  linkHighlight: {
    color: 'orange',
    fontWeight: '800',
  },
});

export default SignupView;