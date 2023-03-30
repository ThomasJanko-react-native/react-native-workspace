import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';


const AnimatedComponent = () => {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('./react.animation.json')}
          autoPlay={true}
          loop={true}
          style={styles.animation}
        />
      </View>
    );
  };

  export default AnimatedComponent;


  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#F5FCFF',
    },
    animation: {
      width: 40,
      height: 40,
    },
  });
  