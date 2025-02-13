import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomTextInput from './CustomTextInput';
import React from 'react';
import { useState } from 'react';
import Button from './Botton';

interface LoginViewProps {
  onSwitchToSignup: () => void;
}

const LoginView = ({ onSwitchToSignup }: LoginViewProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>

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

      <Button 
        title="Login"
        onPress={() => Alert.alert('Login button clicked')}
      />

      <TouchableOpacity 
        onPress={onSwitchToSignup}
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Don't have an account? </Text>
        <Text style={[styles.linkText, styles.linkHighlight]}>Sign up</Text>
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
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
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

export default LoginView;