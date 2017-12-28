import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
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
        {gridValues.map((val, index) => {
          const colorIndex = this.state[index] ? this.state[index] : val;
          return (<TouchableOpacity
            key={`color-${index}`}
            style={{ backgroundColor: getIndexColor(colorIndex), width: '14.2%', height: '5%' }}
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
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
