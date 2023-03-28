import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { Skeleton } from '@rneui/base';
// import { Header } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';


const NativeElements = () => {
    return (
        <View>
             <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            >
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'Header', style: styles.heading }}
    />
        <Card >
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider/>
        <View style={{position:"relative",alignItems:"center"}}>
          <Image
              style={{width:"100%",height:100}}
              resizeMode="contain"
              source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
            />
          <Text style={{color: 'red'}}>Pranshu Chittora</Text>
         </View>
        </Card>
        <View style={{alignSelf: 'center', marginTop: 10}} row align="center" spacing={4}>
          <Skeleton style={{margin: 4}} animation="pulse" width={200} height={40} />
          <Skeleton style={{margin: 4}} 
          LinearGradientComponent={LinearGradient}
            animation="wave"
            width={200}
            height={40}
          />
          <Skeleton style={{margin: 4}}  animation="none" width={200} height={40} />
        </View>
       
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    });

export default NativeElements;
