import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Clock from '../components/Clock';
import TrainList from '../components/TrainList';

export default function Home() {
  const [localTime, setlocalTime] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Train Indicator</Text>
      <Clock localTime={localTime} setlocalTime={setlocalTime} />
      <TrainList localTime={localTime} />
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
