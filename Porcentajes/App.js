import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    padding: '20%',
    backgroundColor: '#f00',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#000',
    // height: ,
    // width: '100%',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
});
