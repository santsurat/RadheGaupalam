import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from '../../components/bottomSheet';

const Vacation = () => {
  const navigation = useNavigation();

  const bottomSheetModalRef = useRef(null);

  const showBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };

  const goBack = () => {
    navigation.goBack(); 
  };

  return (
    <>
      <BottomSheetModalProvider enabled={false}>
        <View style={styles.mainContainer}>
          <View style={{ top: 20, flexDirection: 'row', gap: 35 }}>
            <TouchableWithoutFeedback onPress={goBack} >
            <Image
              source={require('../../assets/images/left.png')}
              style={{ width: 30, height: 30, marginLeft: 10, bottom: 5 }}
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
                marginLeft: 70,
                bottom: 5,
              }}>
              Vacation
            </Text>
            <TouchableWithoutFeedback >
              <Image
                source={require('../../assets/images/i.png')}
                style={{ width: 20, height: 20, marginLeft: 60, bottom: 2 }}
              />
            </TouchableWithoutFeedback>
          </View>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#E5E5E5',
              top: 30,
            }}>
            <Image
              source={require('../../assets/images/8092.png')}
              style={{
                width: 300,
                height: 300,
                marginTop: 90,
                alignSelf: 'center',
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '600',
                fontSize: 20,
              }}>
              You have no vacation added
            </Text>
            <TouchableWithoutFeedback onPress={showBottomSheet}>
              <View
                style={{
                  backgroundColor: 'purple',
                  height: 50,
                  width: 320,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 115,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '300',
                  }}>
                  Add Vacation
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={['30%']}
          backgroundStyle={{ borderRadius: 30 }}>
          <BottomSheet />
        </BottomSheetModal>
      </BottomSheetModalProvider>
     
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
});

export default Vacation;
