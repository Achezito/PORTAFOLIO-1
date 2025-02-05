import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, Appbar } from 'react-native-paper';

export default function App() {

  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      {/* APPBAR COMPONENT PAPER */}
      <Appbar>
        <Appbar.Content title='REACT NATIVE PAPER' />

      </Appbar>
      {/* TEXTINPUT COMPONENT PAPER */}
      <TextInput 
        style={styles.input}
        label='Type SomeThing'
        value={text}
        textColor='blue'
        onChangeText={text => setText(text)}
      />
      {/* BUTTON COMPONENT PAPER */}
      <Button mode='contained' onPress={() => alert(`Text: ${text}`)}>
        Type SomeThing!
      </Button>
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
    paddingHorizontal: 20,  // Márgenes laterales
  },
  input: {
    width: '90%',           // No ocupa toda la pantalla en dispositivos grandes
    marginBottom: 16,
    backgroundColor: '#f8f8f8', // Color más suave
    borderRadius: 8,        // Bordes redondeados
  },
  button: {
    width: '90%',           // Tamaño consistente
    borderRadius: 8,        // Bordes redondeados
    marginTop: 10,          // Espaciado superior
  },
});
