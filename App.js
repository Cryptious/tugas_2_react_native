/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Barang from './Component/Barang';
import Header from './Header';


export default class App extends Component<Props>{
  render(){
    return(
      <View>
        <StatusBar backgroundColor="red" />
        <Header />
        <Barang namabelanja="================ Total Belanja ================"/>
      </View>
    )
  }
};
