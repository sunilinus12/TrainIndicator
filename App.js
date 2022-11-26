import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [localTime, setlocalTime] = useState('');
  const startClock = () => {
    let startDate = new Date().setHours(5);
    startDate = new Date(startDate).setMinutes(0);
    startDate = new Date(startDate).setSeconds(0);
    setlocalTime(new Date(startDate));
  };

  useEffect(() => {
    startClock();
  }, []);

  const updateTime = () => {
    console.log('working');
    let update = new Date(localTime?.getTime() + 1000 * 60);
    setlocalTime(update);
  };
  if (localTime === '') {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color="red" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Current Time</Text>
          <Text style={styles.textStyle}>{localTime.toLocaleTimeString()}</Text>
          <Text style={styles.textStyle}></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});

export default App;
