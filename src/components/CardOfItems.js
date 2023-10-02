import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView,TouchableWithoutFeedback} from 'react-native';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const CardOfItems = ({selectedCategory, searchQuery,isEmpty}) => {
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

  const filteredItems = items.filter((item) => {
    const name = item.name.toLowerCase();
    const selectedCategoryLower = selectedCategory
      ? selectedCategory.toLowerCase()
      : '';
    const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : '';

    if (isEmpty) { 
      return false;
    }

    return (
      (selectedCategoryLower === '' ||
        name.includes(selectedCategoryLower)) &&
      (searchQueryLower === '' || name.includes(searchQueryLower))
    );
  });



  if (isEmpty || (searchQuery && filteredItems.length === 0)) {
    return   <Text style={styles.noResultsText}>No results to show</Text>; 
  }

  const navigation = useNavigation();

  const navigateToProductDetail = (selectedIndex) => {
    navigation.navigate('ProductDetails', { items,selectedIndex });
  };

  return (
    <ScrollView alwaysBounceVertical={true}>
  {filteredItems.map((item, index) => (
    <TouchableWithoutFeedback
    key={index}
    onPress={() => navigateToProductDetail(index)}
  >
  <View style={styles.cardContainer}>
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
  </TouchableWithoutFeedback>
))}
      <View style={styles.footer}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '400',
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
    marginTop: 15,
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
  noResultsText: {
    color: '#333',
    marginTop: '70%',
    fontSize: 18,
    textAlign: 'center',
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
    marginLeft: 70,
    marginRight: 70,
    // borderStyle: 'dotted',
  },
  ltrContainer:{
    flexDirection:'row',
    top:10,
    
  }
});

export default CardOfItems;
