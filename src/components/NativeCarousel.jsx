import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';


const DATA = [
    { id: 1, title: 'Item 1', text: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Item 2', text: 'Consectetur adipiscing elit' },
    { id: 3, title: 'Item 3', text: 'Sed do eiusmod tempor incididunt' },
    { id: 4, title: 'Item 4', text: 'Ut labore et dolore magna aliqua' },
    { id: 5, title: 'Item 5', text: 'Ut enim ad minim veniam' },
  ];

const NativeCarousel = () => {
    return (
        <View style={{alignSelf: 'center'}}>
            <Carousel
                data={DATA}
                renderItem={renderItem}
                sliderWidth={300}
                itemWidth={300}
                layout={'satck'}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
            />
        </View>
    );
}

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: 'grey',
      borderRadius: 5,
      padding: 20,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 10,
      marginBottom: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
    },
  });



export default NativeCarousel;
