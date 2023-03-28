import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NativeElements from './src/components/NativeElements';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import NativeCarousel from './src/components/NativeCarousel';
import AnimatedComponent from './src/components/AnimatedComponent';

const App = () => {

 
  return (
      <SafeAreaProvider style={{flex: 1}}>
        <View style={{flex: 1}}>
          <NativeElements/>
          <NativeCarousel/>
        </View>
        <View style={{position: 'absolute', alignSelf: 'center', bottom: 0}}>
          <AnimatedComponent/>
        </View>
      </SafeAreaProvider>
  );
};


export default App;
