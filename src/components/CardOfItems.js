import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import Refresh from 'react-native-vector-icons/Ionicons';
import React from 'react';

const CardOfItems = () => {
  return (
    <ScrollView alwaysBounceVertical={true}>
      <View style={Styles.cardContainer}>
        <Image
          source={require('../assets/images/cowmilk.png')}
          style={Styles.imageCard}
        />
        <View>
          <Text style={Styles.RadheGaupalam}>RadheGaupalam</Text>
          <Text style={Styles.cowMilk}>Cow Milk</Text>
          <View style={Styles.ltrContainer}>
            <Text style={Styles.ltrText}>
              <Image
                source={require('../assets/icons/veg.png')}
                style={Styles.vegIcon}
              />
              1 ltr
            </Text>
            <View style={Styles.currencyContainer}>
              <Rupee name="currency-rupee" color="black" size={20} />
              <Text style={Styles.currencyText}>60</Text>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <Text style={Styles.buyOnce}>BUY ONCE</Text>
            <Text style={Styles.subscribeButton}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>

      <View style={Styles.cardContainer}>
        <Image
          source={require('../assets/images/buffalomilk.png')}
          style={Styles.imageCard}
        />
        <View>
          <Text style={Styles.RadheGaupalam}>RadheGaupalam</Text>
          <Text style={Styles.cowMilk}>Buffalo Milk</Text>
          <View style={Styles.ltrContainer}>
            <Text style={Styles.ltrText}>
              <Image
                source={require('../assets/icons/veg.png')}
                style={Styles.vegIcon}
              />
              1 ltr
            </Text>
            <View style={Styles.currencyContainer}>
              <Rupee name="currency-rupee" color="black" size={20} />
              <Text style={Styles.currencyText}>70</Text>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <Text style={Styles.buyOnce}>BUY ONCE</Text>
            <Text style={Styles.subscribeButton}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>

      <View style={Styles.cardContainer}>
        <Image
          source={require('../assets/images/cowpaneer.png')}
          style={Styles.imageCard}
        />
        <View>
          <Text style={Styles.RadheGaupalam}>RadheGaupalam</Text>
          <Text style={Styles.cowMilk}>Cow Paneer</Text>
          <View style={Styles.ltrContainer}>
            <Text style={Styles.ltrText}>
              <Image
                source={require('../assets/icons/veg.png')}
                style={Styles.vegIcon}
              />
              1 kg
            </Text>
            <View style={Styles.currencyContainer}>
              <Rupee name="currency-rupee" color="black" size={20} />
              <Text style={Styles.currencyText}>420</Text>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <Text style={Styles.buyOnce}>BUY ONCE</Text>
            <Text style={Styles.subscribeButton}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>

      <View style={Styles.cardContainer}>
        <Image
          source={require('../assets/images/buffalopaneer.png')}
          style={Styles.imageCard}
        />
        <View>
          <Text style={Styles.RadheGaupalam}>RadheGaupalam</Text>
          <Text style={Styles.cowMilk}>Buffalo Paneer</Text>
          <View style={Styles.ltrContainer}>
            <Text style={Styles.ltrText}>
              <Image
                source={require('../assets/icons/veg.png')}
                style={Styles.vegIcon}
              />
              1 kg
            </Text>
            <View style={Styles.currencyContainer}>
              <Rupee name="currency-rupee" color="black" size={20} />
              <Text style={Styles.currencyText}>460</Text>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <Text style={Styles.buyOnce}>BUY ONCE</Text>
            <Text style={Styles.subscribeButton}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>

      <View style={Styles.cardContainer}>
        <Image
          source={require('../assets/images/desiGhee.png')}
          style={Styles.imageCard}
        />
        <View>
          <Text style={Styles.RadheGaupalam}>RadheGaupalam</Text>
          <Text style={Styles.cowMilk}>Cow Ghee</Text>
          <View style={Styles.ltrContainer}>
            <Text style={Styles.ltrText}>
              <Image
                source={require('../assets/icons/veg.png')}
                style={Styles.vegIcon}
              />
              1 ltr
            </Text>
            <View style={Styles.currencyContainer}>
              <Rupee name="currency-rupee" color="black" size={20} />
              <Text style={Styles.currencyText}>600</Text>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <Text style={Styles.buyOnce}>BUY ONCE</Text>
            <Text style={Styles.subscribeButton}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>

      <View style={Styles.cardContainer}>
        <Image
          source={require('../assets/images/buffaloghee.png')}
          style={Styles.imageCard}
        />
        <View>
          <Text style={Styles.RadheGaupalam}>RadheGaupalam</Text>
          <Text style={Styles.cowMilk}>Buffalo Ghee</Text>
          <View style={Styles.ltrContainer}>
            <Text style={Styles.ltrText}>
              <Image
                source={require('../assets/icons/veg.png')}
                style={Styles.vegIcon}
              />
              1 ltr
            </Text>
            <View style={Styles.currencyContainer}>
              <Rupee name="currency-rupee" color="black" size={20} />
              <Text style={Styles.currencyText}>1260</Text>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <Text style={Styles.buyOnce}>BUY ONCE</Text>
            <Text style={Styles.subscribeButton}>SUBSCRIBE</Text>
          </View>
        </View>
      </View>
      <View style={{height: 200}}>
        <Text style={Styles.footer}> No More Items</Text>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
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
  RadheGaupalam: {
    color: 'black',
    fontSize: 8,
    marginLeft: 10,
  },
  cowMilk: {
    color: 'black',
    fontSize: 20,
    top: 5,
    marginLeft: 10,
  },
  ltrContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ltrText: {
    color: 'black',
    fontSize: 14,
    top: 5,
    marginLeft: 15,
  },
  currencyContainer: {
    marginLeft: '30%',
    top: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  currencyText: {
    color: 'black',
    fontSize: 20,
    bottom: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    top: 10,
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
  },
  footer: {
    color: 'black',
    textAlign: 'center',
    top: 20,
    fontSize: 30,
    fontWeight: '500',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginLeft: 70,
    marginRight: 70,
    borderStyle: 'dotted',
  },
});

export default CardOfItems;
