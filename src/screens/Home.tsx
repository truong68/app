// ./screens/Home.js
import React from 'react'
import { StyleSheet, View, ScrollView, Button, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'; import 'react-native-gesture-handler';


const Home = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={[styles.bgScreen]}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={[styles.container]}>
          <View style={[styles.header, styles.mtop, styles.fDirectionbetween]}>
            <View style={[styles.headerLeft, styles.fDirectionbetween]}>
              <TouchableOpacity onPress={() => { navigation.push('Cart') }}>
                <Image source={require('../images/menu.png')} style={[styles.iconHeader]} />
              </TouchableOpacity>
              <Text style={[styles.textMenu]}>PAGES</Text>
            </View>
            <View style={[styles.headerRight, styles.fDirectionbetween]}>
              <TouchableOpacity onPress={() => { navigation.push('Cart') }}>
                <Image source={require('../images/shopping-cart.png')} style={[styles.iconHeader]} />
              </TouchableOpacity>
              <Image source={require('../images/account.png')} style={[styles.iconHeader]} />
            </View>

          </View>
          <View style={[styles.secttionBanner]}>
            <Image source={require('../images//home.png')} style={[styles.imageBanner]} />
          </View>
          <View style={[styles.secttionText, styles.fDirectioncolumm]}>
            <View >
              <Text style={[styles.textTitle, styles.mtopText]}>The Fastest Delivery for Your Medicine</Text>
            </View>
            <View style={[styles.Content]}>
              <Text style={[styles.textContent, styles.mtopText]}>Just order your medicine & you get it delivered to you </Text>
            </View>

          </View>
          <View style={[styles.secttionbutton]}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.push('Offers'); }}>
              <Text style={styles.text}>Get Started</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// <View style={styles.center}>
//   <Button title="Go to Deatalis Screen" onPress={()=>{
//     navigation.navigate('Detalis')
//   }} />


// </View>
// );

const styles = StyleSheet.create({
  bgScreen: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  header: {
    width: '80%',
    height: 50,
    // backgroundColor:'green'
  },
  headerLeft: {
    width: 80,
    height: 50,
    // backgroundColor:'red'
  },
  textMenu: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black'
  },
  headerRight: {
    width: 80,
    height: 50,
    // backgroundColor:'blue'
  },
  iconHeader: {
    width: 30,
    height: 40

  },
  secttionBanner: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    // backgroundColor:'green'
  },
  imageBanner: {
    width: '80%',
    height: 450,
    resizeMode: "stretch",
  },
  secttionText: {
    width: '70%',
    height: 200,
    // backgroundColor:'red'
  },
  textTitle: {
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    color: '#7A1B24'
  },
  Content: {
    width: '80%',
    height: 'auto',
    // backgroundColor:'red'
  },
  textContent: {
    textAlign: 'center',
    color: '#3F201F',
    fontSize: 12
  },
  secttionbutton: {
    width: 200,
    height: 200,
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  button: {
    backgroundColor: '#AC3834',
    borderRadius: 8,
    width: 150,
    height: 50
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50
  },
  mtop: {
    marginTop: 10,
  },
  mtopText: {
    marginTop: 30
  },
  fDirectionbetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fDirectioncolumm: {
    flexDirection: 'column',
    alignItems: 'center'

  },



});

export default Home;
