import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function TrainList({localTime}) {
  const [startTime, setstartTime] = useState('');
  const [endtime, setEndTime] = useState('');
  const handleClock = () => {
    let startDate = new Date().setHours(5);
    startDate = new Date(startDate).setMinutes(0);
    startDate = new Date(startDate).setSeconds(0);
    setstartTime(new Date(new Date(startDate).getTime()));
    let b = new Date(new Date(startDate));
  };
  useEffect(() => {
    handleClock();
  }, []);

  return (
    <View>
      <Text>endtime: </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
