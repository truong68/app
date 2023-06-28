import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text, Button, Image, TouchableOpacity } from 'react-native';




export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.container, styles.fDirectionColumm]}>
          <View style={[styles.secttionPage, styles.fDirectionRowflexend, styles.hr]}>
            <View style={[styles.pageOne,]}>
              <Text style={[styles.pageText,]}>PAGE</Text>
            </View>
            <View style={[styles.iconMenu]}>
              <Image source={require
                ('../images/cancel.png')} style={[styles.mtop]} />
            </View>
          </View>
          <View>
            <View style={[styles.secttionContent, styles.fDirectionRowCenter]}>
              <Image source={require('../images/house.png')} style={[styles.iconPageText]} />
              <Text style={[styles.pageTextContent]}>HomePage</Text>
            </View>
            <View style={[styles.secttionContent, styles.fDirectionRowCenter]}>
              <Text style={[styles.pageTextContent]}>Offers</Text>
            </View>
            <View style={[styles.secttionContent, styles.fDirectionRowCenter]}>
              <Text style={[styles.pageTextContent]}>Oder</Text>
            </View>
            <View style={[styles.secttionContent, styles.fDirectionRowCenter]}>
              <Text style={[styles.pageTextContent]}>Feedback</Text>
            </View>

          </View>



        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  pageOne: {
    width: 200,
    height: 'auto',
    // backgroundColor:'pink'
  },
  iconMenu: {
    width: 70,
    height: 'auto',
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
    // backgroundColor:'gray'
  },
  iconPage: {
    width: 50,
    height: 50,
    marginTop: 20,
    // backgroundColor:'yellow'
  },
  secttionContent: {
    width: '100%',
    height: 100,
  },
  pageText: {
    width: 180,
    height: 50,
    fontSize: 20,
    textAlign: 'center',
    color: '#0A1551',
    fontWeight: '300',
    // backgroundColor:'red',
    marginTop: 20
  },

  pageTextContent: {
    width: 100,
    height: 'auto',
    fontSize: 20,
    textAlign: 'center',
    color: '#0A1551',
    fontWeight: 'bold',
    // backgroundColor:'green' 
  },
  hr: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  iconPageText: {
    width: 25,
    height: 25,
  },
  fDirectionColumm: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  fDirectionRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fDirectionRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fDirectionRowflexend: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  mtop: {
    marginTop: 15
  }




});