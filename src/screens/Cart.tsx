import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';

import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';



const Cart = ({ navigation }: { navigation: any }) => {

  const [buttonText, setButtonText] = useState<string>('Order Summary');
  const onPress = () => {
    if (buttonText === 'Order Summary') {
      setButtonText('Order Summary');
    } else {
      setButtonText('Order Summary');
    }
  };

  return (

    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.secttionPage, styles.fDirectionRowAround, styles.hr]}>
          <View style={[styles.pageOne,]}>
            <View style={[styles.pageOneConttent, styles.fDirectionRowAround]}>
              <Image source={require
                ('../images//back.png')} style={[styles.icon]} />
              <Text style={[styles.textLeft]}>BACK</Text>
            </View>
          </View>
          <View style={[styles.pageTwo, styles.fDirectionRowBetween]}>
            <View style={[styles.pageTwoLeft, styles.fDirectionRowBetween]}>
              <Image source={require
                ('../images//shopping-cart.png')} style={[styles.icon]} />
              <Text style={[styles.textRight]}>Shopping Cart</Text>
            </View>
            <View style={[styles.pageTwoRight]}>
              <Image source={require
                ('../images//account.png')} style={[styles.icon]} />
            </View>
          </View>
        </View>
        <View style={[styles.secttion, styles.mtop, styles.flexDirectionRowCenter]}>
          <View style={[styles.ChangeButton, styles.fDirectionRowBetween]}>
            <View style={[styles.ChangeButtonLeft]}>
              <TouchableOpacity onPress={onPress}>
                <Text style={[styles.textChange]}>{buttonText}</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.ChangeButtonRight]}>
              <Text style={[styles.textChange]}>
                Favorites
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.secttion, styles.mtopButtonChange, styles.fDirectionColumm]}>
          <View style={[styles.ContentChangeButton, styles.fDirectionRowCenter]}>
            <View style={[styles.iconButton,]}>
              <Image source={require
                ('../images//cart.png')} style={[styles.iconCart]} />
            </View>
            <View style={[styles.textButton]}>
              <Text style={[styles.textOfButton]}>
                YOU HAVEN'T FAVORITED {`\n`} ANY PRODUCT YET
              </Text>
            </View>
            <View style={[styles.buttons]}>
              <TouchableOpacity onPress={() => { navigation.push('Home') }}>
                <Text style={[styles.startButtons]}> START SHOPPING</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Cart;

const styles = StyleSheet.create({
  pageOne: {
    width: 80,
    height: 80,
    // backgroundColor:'orange'
  },
  pageOneConttent: {
    width: '100%',
    height: 80,
  },
  pageTwo: {
    width: 230,
    height: 80,
    // backgroundColor:'pink'
  },
  pageTwoLeft: {
    width: 170,
    height: 80,
    // backgroundColor:'blue'
  },
  pageTwoRight: {
    width: 40,
    height: 80,
    // backgroundColor:'red'
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  secttionPage: {
    width: '100%',
    height: 80,
    // backgroundColor:'green'
  },
  secttion: {
    width: '100%',
    height: 'auto',
    // backgroundColor:'blue'
  },
  ChangeButton: {
    width: '80%',
    height: 50,
    borderRadius: 14,
    backgroundColor: '#E3E5F5'
  },
  ChangeButtonLeft: {
    width: '48%',
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: '#fff'
  },
  textChange: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: 'sans-serif', color: 'black'
  },
  ChangeButtonRight: {
    width: '48%',
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    marginRight: 5,
    backgroundColor: '#fffff'
  },
  ContentChangeButton: {
    width: '100%',
    height: 400,
    // backgroundColor:"red"
  },
  iconButton: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#E3E5F5'
  },
  textButton: {
    width: '100%',
    height: 80,
    marginTop: 30,
    // backgroundColor:'green'

  },
  textOfButton: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#0A1551'
  },
  buttons: {
    width: '60%',
    marginTop: 30,


  },
  startButtons: {
    fontSize: 18,
    lineHeight: 50,
    textAlign: 'center',
    backgroundColor: '#0A1551',
    color: '#FFFFFF',
    borderRadius: 7
  },
  iconCart: {
    width: 80,
    height: 80,
    marginTop: 30,
    marginLeft: 35
  },

  icon: {
    width: 40,
    height: 40,
    marginTop: 15
  },

  textLeft: {
    lineHeight: 70,
    fontSize: 18,
    fontWeight: '400',
    color: 'black'
  },
  textRight: {
    lineHeight: 70,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  mtop: {
    marginTop: 30
  },
  mtopButtonChange: {
    marginTop: 100
  },
  hr: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },




  fDirectionColumm: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  fDirectionRowCenter: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  fDirectionRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fDirectionRowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  fDirectionRowflexend: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexDirectionRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});