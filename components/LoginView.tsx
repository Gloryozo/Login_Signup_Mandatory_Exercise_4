import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from './CustomTextInput';
import { useState } from 'react';
import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native';

const LoginView: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation<NavigationProp<any>>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>LOGIN</Text>
       <Text>Please sign in to continue</Text>
     <View>
      <CustomTextInput 
         icon="envelope"
         placeholder="EMAIL"
         value={email}
         onChangeText={setEmail}
        
      /></View>
       <Text nativeID="formLabel">PASSWORD</Text>
       <CustomTextInput 
         placeholder="PASSWORD"
         value={password}
         onChangeText={setPassword}
      />
       <View style={styles.button}>
         <Button
            title="Login"
            color="rgb(203, 182, 23)"
            onPress={() => Alert.alert('Log in Button Clicked')}
           />
       </View>
       <TouchableOpacity onPress={() => navigation.navigate('Signup')}style={{ flexDirection: 'row' }}>
        <Text> Don't have an account? </Text>
         <Text style={styles.linkText}> Sign up</Text> 
      </TouchableOpacity>
    </View>
  )
}
 
const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    padding: 10,
    margin: 20,
    width: 200,
    borderRadius: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
    color: 'rgb(58, 58, 18)',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  linkText: {
    color: 'blue',
    marginTop: 20,
    flexDirection: 'row',
  },

 
});
export default LoginView;