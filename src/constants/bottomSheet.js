import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BottomSheet = () => {
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // const formatDateString = (date) => {
  //   const day = date.getDate();
  //   const year = date.getFullYear();
  //   return `${day} ${year}`;
  // };

  const showStartPicker = () => {
    setStartPickerVisible(true);
  };

  const showEndPicker = () => {
    setEndPickerVisible(true);
  };

  const hideStartPicker = () => {
    setStartPickerVisible(false);
  };

  const hideEndPicker = () => {
    setEndPickerVisible(false);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(date);
    hideStartPicker();
  };

  const handleEndDateConfirm = (date) => {
    setEndDate(date);
    hideEndPicker();
  };

  return (
    <>
      <View style={styles.bottomSheetContainer}>
        <TouchableWithoutFeedback onPress={showStartPicker}>
          <View style={styles.datePickerButton}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>Starts On</Text>
              <Text style={{ color: 'blue', top: 15, letterSpacing: 0.5, left: 12 }}>{formatDateString(startDate)}</Text>
            </View>
            <Image source={require('../assets/images/rightarrow.png')} style={{ width: 20, height: 20, top: 40 }} />
            <TouchableWithoutFeedback onPress={showEndPicker}>
              <View>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>Ends On</Text>
                <Text style={{ color: 'blue', top: 15, letterSpacing: 0.5, left: 8 }}>{endDate ? formatDateString(endDate) : 'Optional'}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={showStartPicker}>
          <View style={{ backgroundColor: 'purple', height: 50, width: 320, justifyContent: 'center', alignSelf: 'center', marginTop: 30, borderRadius: 5 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '300', letterSpacing: 0.5 }}>Add Vacation</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <DateTimePickerModal
        isVisible={isStartPickerVisible}
        mode="date"
        onConfirm={handleStartDateConfirm}
        onCancel={hideStartPicker}
      />

      <DateTimePickerModal
        isVisible={isEndPickerVisible}
        mode="date"
        onConfirm={handleEndDateConfirm}
        onCancel={hideEndPicker}
      />
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  datePickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
