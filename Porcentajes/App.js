import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from './src/components/Card.js';
import objects from './src/components/objects.js';
// import { operationB } from "./src/components/operaciones.js";

export default function App() {
  const [calculator1, setCalculator1] = useState(objects.calculator_1);
  const [calculator2, setCalculator2] = useState(objects.calculator_2);
  const [calculator3, setCalculator3] = useState(objects.calculator_3);

  let inputs = [
    calculator1.input_A,
    calculator1.input_B,
    calculator2.input_A,
    calculator2.input_B,
    calculator3.input_A,
    calculator3.input_B,
  ];

  // const isEmpty = Object.keys(calcualtion1).length === 0;
  // console.log(calculator1);

  useEffect(() => {
    calcualtion1();
    calcualtion2(calculator2, setCalculator2, 0);
    calcualtion2(calculator3, setCalculator3, 1);
  }, inputs);

  // operacion calculadora 1
  const calcualtion1 = () => {
    let result;

    if (
      Object.keys(calculator1.input_A).length !== 0 &&
      Object.keys(calculator1.input_B).length !== 0
    ) {
      result = (calculator1.input_A * calculator1.input_B) / 100;
    } else {
      result = '0';
    }
    console.log("hola");

    setCalculator1({...calculator1, total: result});
  };

  // operacion calculadora 2 y 3
  const calcualtion2 = (calculator, setCalculator, num) => {
    let result;

    if (num == 0) {
      if (
        Object.keys(calculator.input_A).length !== 0 &&
        Object.keys(calculator.input_B).length !== 0
      ) {
        result = (calculator.input_B * 100) / calculator.input_A;
      } else {
        result = 0;
      }
    } else {
      if (
        Object.keys(calculator.input_A).length !== 0 &&
        Object.keys(calculator.input_B).length !== 0
      ) {
        result = (calculator.input_B * 100) / calculator.input_A;
      } else {
        result = 0;
      }
    }

    setCalculator({...calculator, total: result});
  };

  return (
    <View style={styles.all}>
      {/* calculadora 1 */}
      <Card calculator={calculator1} setCalculator={setCalculator1} />

      {/* calculadora 2 */}
      <Card calculator={calculator2} setCalculator={setCalculator2} />

      {/* calculadora 3 */}
      <Card calculator={calculator3} setCalculator={setCalculator3} />
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    margin: 5,
  },
});
