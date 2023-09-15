import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function Hello() {
  const [name,setName] =  useState('hhm');
  return (
    <View style={styles.container}>
      <Text>Home Screen hello </Text>
      <TextInput style={styles.input}
      value={name}>
      </TextInput>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor:'black',
    borderWidth:1
  }
});
