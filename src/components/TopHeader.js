/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../utils/Styles';

const TopHeader = () => {
  return <View style={Styles.topHeader}>
    <Text style={Styles.topHeaderA}>Liptone<Text style={Styles.topHeaderB}>MOVIES</Text></Text>
  </View>;
};

export default TopHeader;
