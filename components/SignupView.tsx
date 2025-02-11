import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import CustomTextInput from './CustomTextInput';
import React from 'react'

export default function SignupView() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');

   
  return (

    <View style={styles.container}>
       <Text style={styles.headText}>CREATE ACCOUNT</Text>
     
      <CustomTextInput 
         placeholder="FULL NAME"
         value={fullName}
         onChangeText={setFullName}
      />
      <CustomTextInput 
         placeholder="EMAIL"
         value={email}
         onChangeText={setEmail}
      />
       
       <CustomTextInput 
         placeholder="PASSWORD"
         value={password}
         onChangeText={setPassword}
      />
      <CustomTextInput 
         placeholder="CONFIRM PASSWORD"
         value={password}
         onChangeText={setPassword}
      />
       <View style={styles.button}>
         <Button
            title="Sign up"
            color="rgb(203, 182, 23)"
            onPress={() => Alert.alert('Sign up Button Clicked')}
           />
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});