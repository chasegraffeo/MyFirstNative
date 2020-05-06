import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyleOne}>HELL YEA BOI!!!</Text>
      <Image source={require('./ken.jpg')} style={{ width: '95%', height: '75%' }} />
      <Text style={styles.textStyleTwo}>Tokyo Ghoul</Text>
      <Image source={require('./Fairy.jpg')} style={{ width: '95%', height: '75%' }} />
      <Text style={styles.textStyleOne}>Fairy Tail</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleOne: {
    color: 'orange',
    fontSize: 20
  },
  textStyleTwo: {
    color: 'lime',
    fontSize: 40
  }
});
