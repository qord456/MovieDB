/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';
import TopHeader from './src/components/TopHeader';
import Styles from './src/utils/Styles';
import Genres from './src/components/Genres';

function App() {
  return (
    <ScrollView style={Styles.allcoverage}>
      <TopHeader />
      <Genres />
    </ScrollView>
  );
}

export default App;
