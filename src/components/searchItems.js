import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';


const SearchItems = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{top: 10, flexDirection: 'row', gap: 50}}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image
              source={require('../assets/images/left.png')}
              style={{width: 30, height: 30, left: 20, top: 4}}
              tintColor="white"
            />
          </TouchableWithoutFeedback>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              letterSpacing: 0.8,
              fontWeight: '400',
              left: 68,
            }}>
            Search
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', top: 50}}>
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'center',
              width: 315,
              left: 20,
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/images/search.png')}
              style={{width: 30, height: 30, marginTop: 10, left: 10}}
            />
            <TextInput
              placeholder="Search Products"
              placeholderTextColor="black"
              style={{
                left: 10,
                fontSize: 15,
                fontWeight: '300',
                letterSpacing: 0.1,
                color:'black'
              }}
            />
            <Text
              style={{
                color: 'black',
                left: 95,
                fontSize: 40,
                fontWeight: '100',
                bottom: 5,
              }}>
              |
            </Text>
            <Text
              style={{
                color: 'blue',
                left: 95,
                top: 15,
                fontSize: 15,
                fontWeight: '300',
              }}>
              SUBMIT
            </Text>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8FF',
            top: 70,
            borderRadius: 20,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#333',marginTop:"70%",fontSize:20}}>No results to show</Text>
          </View>
        </ScrollView>
      </>
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
});
