import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Clock from '../components/Clock';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Train Indicator</Text>
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
