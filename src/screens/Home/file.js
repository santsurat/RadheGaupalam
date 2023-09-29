import { View, Text ,ScrollView,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React from 'react';
import Card from'../../screens/Home/home';

const file = () => {
  return (
    <ScrollView>
       <View style={styles.mainDiv}>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/location.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>My Address</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:100,}}/>
              </TouchableOpacity>
              <View style={styles.dividerView}></View>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/history.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>Order History</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:90,}}/>
              </TouchableOpacity>
              <View style={styles.dividerView}></View>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/bag.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>Delivery Preference</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:50,}}/>
              </TouchableOpacity>


              <Card/>

           </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'purple', // Customize the background color for Tab 3
    },
    profileText: {
      color: 'black',
      marginLeft: 15,
      fontWeight: '400',
      backgroundColor: '#fff',
      borderRadius: 5,
      textAlign: 'center',
      marginTop: 5,
      fontSize: 13,
      padding: 4,
    },
    imageBackground: {
      backgroundColor: '#fff',
      borderRadius: 50,
      width: 65,
      height: 65,
      top: 35,
      marginLeft: 15,
    },
    imgaeOfBullcow: {
      width: 60,
      height: 60,
      borderRadius: 50 / 1,
      margin: 2.3,
      position: 'absolute',
    },
    walletBalance: {
      backgroundColor: 'rgba(229,229,229,0.35)',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      height: 90,
      width: '50%',
      top: 28,
      left: 46,
    },
    myWallet: {
      color: 'white',
      fontWeight: '300',
      fontSize: 12,
      marginTop: 2,
      marginHorizontal: 2,
      letterSpacing: 0.65,
    },
    avaliableBalance: {
      fontSize: 11,
      marginTop: 5,
      marginHorizontal: 24,
      color: 'white',
      letterSpacing: 0.15,
    },
    zeroMainContainer: {
      flexDirection: 'row',
      top: 10,
      left: 20,
    },
    nameText: {
      color: 'white',
      marginTop: 30,
      marginLeft: 15,
      fontWeight: '600',
    },
    contactText: {
      color: 'white',
      marginLeft: 15,
      fontWeight: '300',
    },
    mainDiv:{
      backgroundColor:'#dfdfdf',
      width:340,
      alignSelf:'center',
      marginTop:10,
      borderRadius:10,
    },
    myAddressDiv:{
      flexDirection:'row',
      display:'flex',
      marginTop:20,
      marginLeft:30,
      gap:20
    },
    dividerView:{
      backgroundColor:'black',
      height:1,
      marginLeft:30,
      marginRight:15
    },
    textName:{
      color:'black',
      fontSize:15,
      fontWeight:'300'
    }
  });
  

export default file