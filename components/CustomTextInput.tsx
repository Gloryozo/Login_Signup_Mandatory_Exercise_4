import {View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';


interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: keyof typeof FontAwesome.glyphMap;

}

const CustomTextInput = ({ placeholder, value, onChangeText, icon }: CustomTextInputProps) => {
  // Move useState INSIDE the component
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextInput
        style={[styles.textbox, isFocused && styles.focusedContainer ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        cursorColor="blue"
      />
      {icon && (
        <FontAwesome
          name={icon} 
          size={20} 
          color={isFocused ? 'blue' : 'grey'} 
          style={styles.icon}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',   
},
text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(239, 239, 227)',
    textAlign: 'left',
    margin: 20,
},
textbox: {
height: 50,
borderRadius: 10,
borderColor: 'white',
borderWidth: 1,
margin: 20,
padding: 5,
width: 300,
backgroundColor: 'white',
shadowColor: 'white',
shadowOffset: { width: 0, height: 6},
shadowOpacity: 0.1,
shadowRadius: 1,
elevation: 1,
},
focusedContainer: {
  borderColor: 'white',
  borderWidth: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 60,
  elevation: 8,
},
icon: {
  position: 'absolute',
  right: 10,
  top: 15,
},
});

export default CustomTextInput;
