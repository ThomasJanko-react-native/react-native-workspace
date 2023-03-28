import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NativeElements from './src/components/NativeElements';
import {StyleSheet, Text } from 'react-native';
import NativeCarousel from './src/components/NativeCarousel';

const App = () => {

 
  return (
      <SafeAreaProvider>
        <NativeElements/>
        <NativeCarousel/>
      </SafeAreaProvider>
  );
};


export default App;
