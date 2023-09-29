import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notification from 'react-native-vector-icons/Ionicons';
import Locationdot from 'react-native-vector-icons/FontAwesome6';
import Close from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from '../../components/Carousel';
import Card from '../../components/CardOfItems';
import { useNavigation } from '@react-navigation/native';

const Home = () =>{

const navigation = useNavigation();

  return(
    <View style={styles.mainContainer}>
    <>
   <View style={{flexDirection: 'row'}}>
   <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
     <View>
       <Image
         source={require('../../assets/images/bullcow.png')}
         style={{
           width: 60,
           height: 60,
           borderRadius: 50 / 1,
           top: 10,
           marginLeft: 10,
         }}
       />
     </View>
     </TouchableWithoutFeedback>
     <View>
       <Text style={{color: 'white', marginTop: 20, marginLeft: 5}}>
         Hi, Sant Surat
       </Text>
       <View style={{marginLeft: 5, flexDirection: 'row', gap: 5,top:3}}>
         <Locationdot name="location-dot" size={15} color="white" />
         <Text style={{color: 'white'}}>Home</Text>
       </View>
     </View>
     <View
       style={{
         marginHorizontal: '25%',
         display: 'flex',
         flexDirection: 'row',
         gap: 18,
       }}>
       <View style={{justifyContent: 'center', top: 10}}>
         <Icon name="search" size={20} color="orange" />
       </View>
       <View style={{justifyContent: 'center', top: 10}}>
         <Icon name="shopping-bag" size={20} color="orange" />
       </View>
       <View style={{justifyContent: 'center', top: 10}}>
         <Notification name="notifications" size={20} color="orange" />
       </View>
     </View>
   </View>
   <ScrollView 
     style={{
       flex: 1,
       backgroundColor: '#F8F8FF',
       top:18,
     }}>
       <Carousel />
       <View style={{borderTopWidth:0.8,marginLeft:15, marginRight:15,color:'grey'}}></View>
       <View style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly',padding:15}}>
         <Text style={{color:'black', borderWidth:1,paddingHorizontal:5,borderRadius:4,backgroundColor:'white'}}>Milk  <Close name="close" size={10} color="black"  /></Text>
         <Text style={{color:'black', borderWidth:1,paddingHorizontal:5,borderRadius:4,backgroundColor:'white'}}>Ghee <Close name="close" size={10} color="black"  /></Text>
         <Text style={{color:'black', borderWidth:1,paddingHorizontal:5,borderRadius:4,backgroundColor:'white'}}>Paneer <Close name="close" size={10} color="black"  /></Text>
       </View>
       <View style={{borderTopWidth:0.8,marginLeft:15, marginRight:15,color:'grey'}}></View>
       <Card/>
     </ScrollView>
 </>
  </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple', // Customize the background color for Tab 3
  }
});

export default Home;
