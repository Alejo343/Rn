import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';

export default function Card(props) {
  const {calculator, setCalculator, onSubmit} = props;

  return (
    <View style={styles.BOX}>
      <View style={styles.BoxTit}>
        <Text style={styles.TexTit}>{calculator.title}</Text>
      </View>

      <View style={styles.BoxDesc}>
        <Text style={styles.TextDesc}>{calculator.description}</Text>
      </View>

      <View style={styles.BoxCalcu}>
        <Text style={styles.TextGen}>{calculator.textDescription[0]}</Text>

        <TextInput
          style={styles.TextGenInput}
          keyboardType={'numeric'}
          placeholder="20"
          onChange={e =>
            setCalculator({...calculator, input_A: e.nativeEvent.text})
          }
        />

        <Text style={styles.TextGen}>{calculator.textDescription[1]}</Text>
        <TextInput
          style={styles.TextGenInput}
          keyboardType={'numeric'}
          placeholder=""
          onChange={e =>
            setCalculator({...calculator, input_B: e.nativeEvent.text})
          }
        />

        <Text style={styles.TextGen}>{calculator.textDescription[2]}</Text>

        <Text style={styles.result}>
          {calculator.total ? calculator.total : 0}
        </Text>

        <Text style={styles.TextGen}>{calculator.textDescription[3]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    margin: 5,
  },
  BOX: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  BoxTit: {
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(227,227,240,1.00)',
  },
  TexTit: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'normal',
    color: 'black',
  },
  BoxDesc: {
    margin: 5,
  },
  TextGen: {
    fontSize: 27,
    // padding: 5,
  },
  BoxCalcu: {
    // backgroundColor: 'red',
    flexWrap: 'wrap',
    fontSize: 27,
    margin: 2,
    paddingBottom: 5,
    textAlign: 'center',
    flexDirection: 'row',
  },
  TextDesc: {
    fontSize: 19,
  },
  TextGenInput: {
    // borderWidth: 2,
    fontSize: 27,
    paddingVertical: 0,
    paddingHorizontal: 8,
    margin: 0,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  result: {
    fontSize: 27,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    paddingHorizontal: 5,
  },
});
