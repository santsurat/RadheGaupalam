import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ShoppingBag = () => {
  const navigation = useNavigation();
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const [showShoppingBag, setShowShoppingBag] = useState(true);

  const goBack = () => {
    navigation.goBack();
  };

  const slideToLeftAndNavigate = () => {
    Animated.timing(slideAnimation, {
      toValue: -1, 
      duration: 100, 
      useNativeDriver: false,
    }).start(() => {
      setShowShoppingBag(false); 
      navigation.navigate('Home'); 
    });
  };

  return (
    <View style={styles.mainContainer}>
      {showShoppingBag && (
        <Animated.View
          style={[
            styles.container,
            {
              transform: [
                {
                  translateX: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -500], // Adjust the value for the desired slide distance
                  }),
                },
              ],
            },
          ]}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image
              source={require('../assets/images/left.png')}
              style={{width: 30, height: 30, marginLeft: 10, top: 18}}
              tintColor="white"
            />
          </TouchableWithoutFeedback>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              top: 20,
              fontSize: 20,
              left: 80,
            }}>
            Shopping Bag
          </Text>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#F8F8FF',
              top: 35,
            }}>
            <Image
              source={require('../assets/images/shoppingcart.png')}
              style={{
                width: 220,
                height: 220,
                alignSelf: 'center',
                marginTop: 120,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
              }}>
              You don't have any items in your bag
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 13,
                fontWeight: '300',
                marginTop: 8,
              }}>
              Your favourite items are just a click away
            </Text>
            <View
              style={{
                backgroundColor: '#800080',
                marginTop: 30,
                width: '50%',
                alignSelf: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{color: 'white', textAlign: 'center', margin: 10}}
                onPress={slideToLeftAndNavigate}>
                Start Shopping
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default ShoppingBag;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
});
