import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const colorSequence = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];
const squareGridNo = 7;
const length = squareGridNo * squareGridNo;
const getIndexColor = num => colorSequence[num % squareGridNo];
const gridValues = Array.from({ length }, (_, index) => index + Math.floor(index / squareGridNo));

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  _onPressButton(index, val) {
    this.setState(state => {
      return { [index]: (state[index] || val) + 1 }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={{ fontSize: 18 }}>Click a square to change its color</Text>
        </View>
        {gridValues.map((val, index) => {
          const colorIndex = this.state[index] ? this.state[index] : val;
          return (<TouchableOpacity
            key={`color-${index}`}
            style={[styles.button, { backgroundColor: getIndexColor(colorIndex) }]}
            onPress={() => this._onPressButton(index, val)}
          >
          </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: '12%',
    height: '7%',
    padding: 10,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 4,
    marginBottom: 4,
  }
});
