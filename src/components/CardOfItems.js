import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Rupee from 'react-native-vector-icons/MaterialIcons';

const CardOfItems = ({selectedCategory}) => {
  const items = [
    {
      name: 'Cow Milk',
      imageSource: require('../assets/images/cowmilk.png'),
      brand: 'RadheGaupalam',
      quantity: '1 ltr',
      price: 60,
    },
    {
      name: 'Buffalo Milk',
      imageSource: require('../assets/images/buffalomilk.png'),
      brand: 'RadheGaupalam',
      quantity: '1 ltr',
      price: 70,
    },
    {
      name: 'Cow Paneer',
      imageSource: require('../assets/images/cowpaneer.png'),
      brand: 'RadheGaupalam',
      quantity: '1 kg',
      price: 420,
    },
    {
      name: 'Buffalo Paneer',
      imageSource: require('../assets/images/buffalopaneer.png'),
      brand: 'RadheGaupalam',
      quantity: '1 kg',
      price: 460,
    },
    {
      name: 'Cow Ghee',
      imageSource: require('../assets/images/desiGhee.png'),
      brand: 'RadheGaupalam',
      quantity: '1 ltr',
      price: 600,
    },
    {
      name: 'Buffalo Ghee',
      imageSource: require('../assets/images/buffaloghee.png'),
      brand: 'RadheGaupalam',
      quantity: '1 ltr',
      price: 1260,
    },
  ];

  // Filter items based on the selectedCategory
  const filteredItems = selectedCategory
    ? items.filter(item =>
        item.name.toLowerCase().includes(selectedCategory.toLowerCase()),
      )
    : items;

  return (
    <ScrollView alwaysBounceVertical={true}>
  {filteredItems.map((item, index) => (
  <View style={styles.cardContainer} key={index}>
    <Image source={item.imageSource} style={styles.imageCard} />
    <View>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.ltrContainer}>
        <Text style={styles.ltrText}>
          <Image
            source={require('../assets/icons/veg.png')}
            style={styles.vegIcon}
          />
        </Text>
        <Text style={styles.ltrText}>{item.quantity}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.priceContainer}>
          <Rupee name="currency-rupee" color="black" size={20}  />
          <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buyOnce}>BUY ONCE</Text>
        <Text style={styles.subscribeButton}>SUBSCRIBE</Text>
      </View>
    </View>
  </View>
))}
      <View style={styles.footer}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
            fontWeight: '900',
          }}>
          No More Items
        </Text>
      </View>
      <View style={{height: 200}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0.9,
    borderColor: 'orange',
    padding: 20,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    zIndex: 40,
    shadowColor: 'white',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'orange',
  },
  brand: {
    color: 'black',
    fontSize: 8,
    marginLeft: 10,
  },
  name: {
    color: 'black',
    fontSize: 20,
    top: 5,
    marginLeft: 10,
  },
  detailsContainer: {
    display: 'flex',
    top: 10,
    left:80
  },
  ltrText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'row',
    bottom:10
  },
  priceText: {
    color: 'black',
    fontSize: 20,
    bottom: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    top: 18,
    marginLeft: 10,
  },
  buyOnce: {
    color: 'black',
    borderWidth: 0.9,
    borderRadius: 5,
    padding: 5,
    bottom: 5,
    backgroundColor: 'white',
  },
  subscribeButton: {
    color: 'white',
    borderWidth: 0.9,
    borderRadius: 5,
    bottom: 5,
    padding: 5,
    backgroundColor: 'purple',
  },
  vegIcon: {
    width: 15,
    height: 15,
    borderColor: 'green',
    borderWidth: 1,
    marginRight: 5,
  },
  footer: {
    color: 'black',
    top: 20,
    textAlign: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginLeft: 70,
    marginRight: 70,
    borderStyle: 'dotted',
  },
  ltrContainer:{
    flexDirection:'row',
    top:10,
    
  }
});

export default CardOfItems;
