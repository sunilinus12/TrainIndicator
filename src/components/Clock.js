import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Clock() {
  const [localTime, setlocalTime] = useState(null);

  const handleClock = () => {
    let startDate = new Date().setHours(5);
    startDate = new Date(startDate).setMinutes(0);
    startDate = new Date(startDate).setSeconds(0);
    setlocalTime(new Date(new Date(startDate).getTime()));
  };

  const handleUpdate = () => {
    setlocalTime(e => {
      setlocalTime(new Date(new Date(e).getTime() + 1000 * 60));
    });
  };

  useEffect(() => {
    handleClock();
    setInterval(() => {
      handleUpdate();
    }, 1000);
  }, []);
  return (
    <View>
      <Text> {localTime?.toLocaleTimeString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
