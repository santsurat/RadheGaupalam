import React, { useState, useEffect } from 'react'; // Import useEffect
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import { ROUTES } from '../../constants';
import { Calendar } from 'react-native-calendars'; 
import { useFocusEffect } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
  // const navigation = useNavigation();

  const today = new Date().toISOString().split('T')[0];
  const [markedDates, setMarkedDates] = useState({ [today]: { selected: true, selectedColor: 'skyblue' } });
  const [currentDate, setCurrentDate] = useState(today);

  const handleDayPress = (day) => {
    const updatedMarkedDates = { ...markedDates };
    if (updatedMarkedDates[currentDate]) {
      delete updatedMarkedDates[currentDate].selected;
    }

    updatedMarkedDates[day.dateString] = { selected: true, selectedColor: 'skyblue' };

    setMarkedDates(updatedMarkedDates);
    setCurrentDate(day.dateString);
  };

  useEffect(() => {
    setMarkedDates({ [today]: { selected: true, selectedColor: 'skyblue' } });
  }, []);


  useFocusEffect(() => {
    setCurrentDate(today);
  });

  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{ top: 20, flexDirection: 'row', left: 140, gap: 50 }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              letterSpacing: 0.5,
              fontWeight: '400',
            }}>
            Calendar
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              borderRadius: 5,
              borderTopWidth: 0.9,
              borderBottomWidth: 0.9,
              height: 25,
              top: 4,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                margin: 5,
                color: 'white',
                fontSize: 9,
                fontWeight: '400',
              }}>
              Vacation
            </Text>
            <Image
              source={require('../../assets/images/holiday.png')}
              style={{ width: 20, height: 20, margin: 5, bottom: 2 }}
            />
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8FF',
            top: 40,
            borderRadius: 25,
          }}>
          <Calendar
            style={{
              marginTop: 30,
              marginLeft: 10,
              marginRight: 10,
              borderColor: 'rgba(5, 5, 100, 0.2)',
            }}
            theme={{
              calendarBackground: '#222',
              dayTextColor: '#fff',
              textDisabledColor: '#444',
              monthTextColor: '#888',
            }}
            markedDates={markedDates} 
            onDayPress={handleDayPress}
          />
          <View style={styles.selectedDateContainer}>
            <Text style={styles.selectedDateText}>Showing orders for: {currentDate}</Text>
          </View>
         {/* <TouchableOpacity onPress={() => navigation.navigate('file')}><Text style={{color:'black',textAlign:'center'}}>file</Text></TouchableOpacity> */}
        </ScrollView>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  selectedDateText: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  },
});

export default CalendarScreen;
