import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NativeElements from './src/components/NativeElements';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import NativeCarousel from './src/components/NativeCarousel';
import AnimatedComponent from './src/components/AnimatedComponent';
import DesktopAnimated from './src/components/DesktopAnimated';

const App = () => {

 
  return (
      <SafeAreaProvider style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <NativeElements/>
          <NativeCarousel/>
        </View>
        <View>
          <DesktopAnimated/>
        </View>
        <View >
          <AnimatedComponent/>
        </View>
        </ScrollView>
      </SafeAreaProvider>
  );
};


export default App;
