import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';


const DesktopAnimated = () => {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('./desktop.json')}
          autoPlay={true}
          loop={true}
          style={styles.animation}
        />
      </View>
    );
  };

  export default DesktopAnimated;


  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#F5FCFF',
    },
    animation: {
      width: 300,
      height: 200,
    },
  });
  