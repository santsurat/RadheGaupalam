import React from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback,Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProductDetails = ({ route }) => {
    const { items, selectedIndex } = route.params;
    const selectedItem = items[selectedIndex]; 
    const { name, brand, quantity, price, imageSource } = selectedItem; 

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); 
  };

  return (
    <>
    <View style={styles.mainContainer}>
    <View style={{ top: 15, flexDirection: 'row', gap: 35 }}>
            <TouchableWithoutFeedback onPress={goBack} >
            <Image
              source={require('../assets/images/left.png')}
              style={{ width: 30, height: 30, marginLeft: 10,  }}
              tintColor="white"
            />
            </TouchableWithoutFeedback>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                letterSpacing: 0.5,
                fontWeight: '400',
                marginLeft: 40,
              }}>
              Product Details
            </Text>
          </View>
      <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F8F8FF',
        top: 30,
      }}>
       <Image source={imageSource} style={{width:200,height:200,alignSelf:'center',top:10,borderRadius:10}}/>
       <Text style={{color:'black',marginTop:40,left:30,fontSize:20}}>{name}</Text>
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'purple',
    },
  });





export default ProductDetails;
