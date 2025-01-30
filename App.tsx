import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [localValue, setLocalValue] = useState('');

  return (
      <View style={styles.container}>
        <Text style={styles.text_header}>Авторизация</Text>
        <TextInput
            style={styles.input}
            onChangeText={setLocalValue}
            value={localValue}
            placeholder="Введите e-mail"
        />
        <TouchableOpacity>
          <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.button_gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
          >
            <Text style={styles.button_text}>Войти</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 50,
    alignItems: 'center',

  },
  text_header: {
    fontSize: 35,
    marginTop: 200,
    fontFamily: 'JetBrainsMono-Regular',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#3b5998',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontFamily: 'JetBrainsMono-Regular',
  },
  button_gradient: {
    borderRadius: 25,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontFamily: 'JetBrainsMono-Regular',
    color: 'white',
    fontSize: 16,
  },
});

export default App;
