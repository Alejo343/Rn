import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card() {
  return (
    <View>
      <View style={styles.cardBox}>
        <View style={styles.card}>
          <Text style={styles.text}>HOLAA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    width: '100%',
    height: 230,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    // backgroundColor: '#',
    height: 200,
    width: '95%',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // position: 'absolute',
    // zIndex: -1,
  },
  text: {
    color: '#fff',
  },
});
