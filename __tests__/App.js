import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import App from '../App';
import { shallow } from 'enzyme';


describe('<App />', () => {
  const wrapper = shallow(<App />);
  const Buttons = wrapper.find(TouchableOpacity);
  it('renders View and Buttons', () => {
    expect(wrapper.find(View).length).toEqual(1);
    expect(Buttons.length).toEqual(49);
  });
  it('Button should have right colors', () => {
    expect(Buttons.first().prop('style').backgroundColor).toEqual('black');
    expect(Buttons.at(1).prop('style').backgroundColor).toEqual('blue');
    expect(Buttons.at(6).prop('style').backgroundColor).toEqual('yellow');
  });
  it('should set state for pressed button', () => {
    expect(wrapper.state('0')).toEqual(undefined);
    Buttons.first().simulate('press');
    expect(wrapper.state('0')).toEqual(1);
  });
});
