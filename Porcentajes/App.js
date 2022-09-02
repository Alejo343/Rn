import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState();
  
  const onSubmit = () => {
    if (number1 && number2) {
      setTotal((number1*number2)/100);
    }
  };

  return (
    <View style={styles.all}>
      {/* calculadora 1 */}
      <View style={styles.BOX}>
        <View style={styles.BoxTit}>
          <Text style={styles.TexTit}>Calculadora 1</Text>
        </View>

        <View style={styles.BoxDesc}>
          <Text style={styles.TextDesc}>
            Calcular el porcentaje de una cantidad dada.
          </Text>
        </View>

        <View style={styles.BoxCalcu}>
          <Text style={styles.TextGen}>El </Text>
          <TextInput
            style={styles.TextGenInput}
            keyboardType={'numeric'}
            placeholder="20"
            onChange={e => setNumber1(e.nativeEvent.text)}
          />
          <Text style={styles.TextGen}> % </Text>
          <Text style={styles.TextGen}>de </Text>
          <TextInput
            style={styles.TextGenInput}
            keyboardType={'numeric'}
            placeholder="100"
            onChange={e => setNumber2(e.nativeEvent.text)}
          />
          <Text style={styles.TextGen}> es </Text>
          <Text
            style={{
              fontSize: 27,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'grey',
              paddingHorizontal: 5,
            }}>
             {total ? total : 0}
          </Text>
          {/* <TextInput
            style={styles.TextGenInput}
            editable={false}
            placeholder="20"
            onChangeText={total}
            // value=""${total}""
          /> */}
        </View>

        <Button title="Enviar" onPress={onSubmit}>
          Hi
        </Button>
      </View>

      {/* calculadora 2 */}
      <View style={styles.BOX}>
        <View style={styles.BoxTit}>
          <Text style={styles.TexTit}>Calculadora 2</Text>
        </View>
        <View style={styles.BoxDesc}>
          <Text style={styles.TextDesc}>
            Calcular el total conociendo un porcentaje.
          </Text>
        </View>
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
});
