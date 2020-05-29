/**
 * Autor: Diana Esthefania Carrillo Cano
 */

import React from 'react';
import {  StyleSheet,  View,  Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>
          Felicidades! Aqui tienes una plantilla en blanco :D
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});