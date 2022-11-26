import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Clock from '../components/Clock';

export default function Home() {
  return (
    <View style={styles.container}>
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
