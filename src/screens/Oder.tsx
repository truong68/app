

import { StyleSheet, View, ScrollView, Text, SafeAreaView, Button, Image, TouchableOpacity, TextInput } from 'react-native';

const Oder = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={[styles.bgScreen]}>
      <ScrollView removeClippedSubviews={true}>
        <View style={[styles.container]}>
          <View style={[styles.header, styles.mtop, styles.fDirectionbetween]}>
            <View style={[styles.headerLeft, styles.fDirectionbetween]}>
              <TouchableOpacity onPress={() => { navigation.push('Cart') }}>
                <Image source={require('../images//menu.png')} style={[styles.iconHeader]} />
              </TouchableOpacity>
              <Text style={[styles.textMenu]}>PAGES</Text>

            </View>
            <View style={[styles.headerRight, styles.fDirectionbetween]}>
              <TouchableOpacity onPress={() => { navigation.push('Cart') }}>
                <Image source={require('../images//shopping-cart.png')} style={[styles.iconHeader]} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../images//account.png')} style={[styles.iconHeader]} />
              </TouchableOpacity>
            </View>

          </View>
          <View style={[styles.title]}>
            <Text style={[styles.titleText]}>
              Medicine List
            </Text>

          </View>
          <View style={[styles.itemsList,]}>
            <View style={[styles.itemsListIcon, styles.fDirectionbetween]}>
              <View style={{ width: "50%", height: 50, }}>
                <View style={styles.itemsSearch}>
                  <Image
                    source={require('../images//search.png')}
                    style={styles.image}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Search Produc"
                  />
                </View>
              </View>
              <View style={[styles.itemIcons, styles.fDirectionbetween]}>
                <TouchableOpacity>
                  <Image
                    source={require('../images//menu.png')}
                    style={[styles.image, styles.mtopText]} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../images//listquare.png')}
                    style={[styles.image, styles.mtopText]} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../images//square.png')}
                    style={[styles.image, styles.mtopText]} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.fDirectionbetween, styles.mbottom]}>
              <View style={[styles.itemsListLeft]}>
                <View style={[styles.imageLeft]}>
                  <Image
                    resizeMode='cover'
                    source={require('../images//Medicine-one.png')}
                    style={[styles.imageLefts]} />
                  <Text style={[styles.titleLeft]}>Medicine 1</Text>
                  <Text style={[styles.pirceLeft]}>$10.00</Text>
                  <TouchableOpacity style={[styles.buttonAdd]}
                    onPress={() => { navigation.push('Cart') }}>
                    <Text style={[styles.textButtonAdd]}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.itemsListRight]}>
                <Image
                  resizeMode='cover'
                  source={require('../images//Medicine-two.png')}
                  style={[styles.imageRight]} />
                <Text style={[styles.titleRight]}>Medicine 2</Text>
                <Text style={[styles.pirceRight]}>$12.00</Text>
                <TouchableOpacity style={[styles.buttonAdd]}
                  onPress={() => { navigation.push('Cart') }}>
                  <Text style={[styles.textButtonAdd]}>Add to Cart</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={[styles.fDirectionbetween, styles.mbottom]}>
              <View style={[styles.itemsListLeft]}>
                <View style={[styles.imageLeft]}>
                  <Image
                    resizeMode='cover'
                    source={require('../images//Medicine-three.png')}
                    style={[styles.imageLefts]} />
                  <Text style={[styles.titleLeft]}>Medicine 3</Text>
                  <Text style={[styles.pirceLeft]}>$15.00</Text>
                  <TouchableOpacity style={[styles.buttonAdd]}
                    onPress={() => { navigation.push('Cart') }}>
                    <Text style={[styles.textButtonAdd]}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.itemsListRight]}>
                <Image
                  resizeMode='cover'
                  source={require('../images//Medicine-four.png')}
                  style={[styles.imageRight]} />
                <Text style={[styles.titleRight]}>Medicine 4</Text>
                <Text style={[styles.pirceRight]}>$20.00</Text>
                <TouchableOpacity style={[styles.buttonAdd]}
                  onPress={() => { navigation.push('Cart') }}>
                  <Text style={[styles.textButtonAdd]}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.fDirectionbetween, styles.mbottom]}>
              <View style={[styles.itemsListLeft]}>
                <View style={[styles.imageLeft]}>
                  <Image
                    resizeMode='cover'
                    source={require('../images//Medicine-five.png')}
                    style={[styles.imageLefts]} />
                  <Text style={[styles.titleLeft]}>Medicine 5</Text>
                  <Text style={[styles.pirceLeft]}>$15.00</Text>
                  <TouchableOpacity style={[styles.buttonAdd]}
                    onPress={() => { navigation.push('Cart') }}>
                    <Text style={[styles.textButtonAdd]}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.itemsListRight]}>
                <Image
                  resizeMode='cover'
                  source={require('../images//Medicine-six.png')}
                  style={[styles.imageRight]} />
                <Text style={[styles.titleRight]}>Medicine 6</Text>
                <Text style={[styles.pirceRight]}>$50.00</Text>
                <TouchableOpacity style={[styles.buttonAdd, styles.mtop]}
                  onPress={() => { navigation.push('Cart') }}>
                  <Text style={[styles.textButtonAdd]}>Add to Cart</Text>
                </TouchableOpacity>
              </View>

            </View>


          </View>

          <View style={[styles.buttonUseMany]}>
            < TouchableOpacity style={styles.button} onPress={() => { navigation.push('Home') }}>
              <Text style={styles.buttonText}>Homepage</Text>
            </TouchableOpacity>
            < TouchableOpacity style={styles.buttonUse}>
              <Text style={[styles.buttonText, styles.buttonCl]}>Give Feedback</Text>

            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Oder;


const styles = StyleSheet.create({
  bgScreen: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '80%',
    height: 50,
  },
  headerLeft: {
    width: 80,
    height: 50,
  },
  textMenu: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black'
  },
  headerRight: {
    width: 80,
    height: 50,
  },
  iconHeader: {
    width: 30,
    height: 40

  },
  title: {
    width: '100%',
    height: 'auto',
    marginTop: 100,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#AE4340'
  },
  itemsList: {
    width: '80%',
    height: 'auto',
    marginTop: 30,
    // backgroundColor:'red'
  },
  itemsListIcon: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    // backgroundColor:'blue'
  },
  itemsSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
  itemIcons: {
    width: "28%",
    height: 50,
    // backgroundColor:'gray'
  },
  image: {
    width: 25,
    height: 25,
  },
  input: {
    flex: 1,
    height: 50,
  },
  itemsListLeft: {
    width: '46%',
    height: 250,
  },
  imageLeft: {
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderColor: '#D3DCEF',
  },
  imageLefts: {
    width: "70%",
    height: '50%',
    alignSelf: 'center'
  },
  textLeft: {
    width: '100%',
    height: 50,
  },
  titleLeft: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  pirceLeft: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonAdd: {
    width: '85%',
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#0A1551'
  },
  textButtonAdd: {
    textAlign: 'center'
    , lineHeight: 35,
    fontSize: 16,
    color: 'white',
    fontWeight: '700'
  },

  itemsListRight: {
    width: '46%',
    height: 250,
    borderColor: '#D3DCEF',
    borderWidth: 1,
  },
  imageRight: {
    width: "80%",
    height: '50%',
    alignSelf: 'center'
  },
  titleRight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10

  },
  pirceRight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10

  },
  buttonUseMany: {
    width: "80%",
    height: 150,
    marginTop: 50,
    marginBottom: 150

  },
  button: {
    backgroundColor: '#AE4340',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonUse: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: "#AE4340",
    borderWidth: 1,
  },
  buttonCl: {
    color: '#AE4340',
  },



  mtop: {
    marginTop: 10,
  },
  mbottom: {
    marginBottom: 20
  },
  mtopText: {
    marginTop: 18,
  },
  mtopBar: {
    marginTop: 40
  },
  fDirectionbetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fDirectionAround: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  fDirectioncolumm: {
    flexDirection: 'column',
    alignItems: 'center'

  },
});