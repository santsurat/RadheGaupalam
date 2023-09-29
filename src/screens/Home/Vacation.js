import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from '../../constants/bottomSheet';

const Vacation = () => {
  const navigation = useNavigation();


  const bottomSheetModalRef = useRef(null);

  const showBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };
  return (
    <BottomSheetModalProvider>
      <View style={styles.mainContainer}>
        <>
          <View style={{ top: 20, flexDirection: 'row', gap: 35 }}>
            <Image source={require('../../assets/images/left.png')} style={{ width: 30, height: 30, marginLeft: 10, bottom: 5 }} tintColor='white' />
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                letterSpacing: 0.5,
                fontWeight: '400',
                marginLeft: 70,
                bottom: 5
              }}>
              Vacation
            </Text>
            <Image source={require('../../assets/images/i.png')} style={{ width: 20, height: 20, marginLeft: 60, bottom: 2 }} />
          </View>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#E5E5E5',
              top: 30,
            }}>
            <Image source={require('../../assets/images/8092.png')} style={{ width: 300, height: 300, marginTop: 90, alignSelf: 'center' }} />
            <Text style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: 20, }}>You have no vacation added </Text>
            <TouchableWithoutFeedback onPress={showBottomSheet}>
              <View style={{ backgroundColor: 'purple', height: 50, width: 320, justifyContent: 'center', alignSelf: 'center', marginTop: 115, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '300' }}>Add Vacation</Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </>
      </View>

   
      <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={['30%']}>
        <BottomSheet/>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  shoppingText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    fontWeight: '300',
    marginTop: 20,
    backgroundColor: "#800080",
    borderRadius: 7,
    width: 160,
    alignSelf: 'center'
  },
});

export default Vacation;
