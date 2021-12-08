/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ColorsFlex: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.firstCase} />
      <View style={styles.secondCase}>
        <View style={styles.yellowCas} />
        <View style={styles.yellowCas} />
        <View style={styles.yellowCas} />
      </View>
      <View style={styles.thirdCase} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
  },
  firstCase: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
  secondCase: {
    flex: 1,
    backgroundColor: '#00FF00',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  yellowCas: {
    backgroundColor: '#FFFF00',
    border: '#OOOOOO',
    borderWidth: 3,
    width: 50,
    height: 50,
  },
  thirdCase: {
    flex: 3,
    backgroundColor: '#0000FF',
  },
});

export default ColorsFlex;
