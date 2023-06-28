import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, } from 'react-native';
import { Header, Tile } from 'react-native-elements';


import { StyleSheet, ScrollView, SafeAreaView, Button, Image, Alert, TouchableOpacity, TextInput } from 'react-native';



const sginup = ({ navigation }: { navigation: any }) => {

  const [isSelected, setSelection] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');
  const handleSign = () => {
    navigation.navigate('Login');
  };
  const handleLogin = () => {
    navigation.navigate('Home');
  };


  return (

    <SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={[styles.container]}>
          <View style={[styles.secttion, styles.fDirectionRowCenter,]}>


            <View style={[styles.titleSignup]}>
              <Text style={{
                fontSize: 22,
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Sign up with  Email </Text>
            </View>
            <View style={[styles.TextBack, styles.fDirectionRowflexend]}>
              <Image source={require
                ('../images/back.png')} style={[styles.mtop]} />
              <Text style={{ marginTop: 32 }} >Other sign up options</Text>
            </View>
            <View style={[styles.fromSignup, styles.mtop]}>
              <View style={[styles.nameSignup]}>
                <Text style={[styles.textFrom]}>Name</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Username"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={[styles.emailSignup]}>
                <Text style={[styles.textFrom]}>Email</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Password"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={[styles.passwordSignup]}>
                <Text style={[styles.textFrom]}>Password</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <Text style={[styles.texttYour]}>Your password must include at least</Text>
              </View>
              <View style={[styles.ConfirmpasswordSignup]}>
                <Text style={[styles.textFrom]}> Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Password"
                  secureTextEntry={true}
                  value={Confirmpassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
              </View>
              <View style={[styles.passwordSignup]}>
              </View>

              <View style={[styles.buttons]}>
                <Button title="Sign in"
                  color="#78BB07"
                  onPress={handleLogin}
                />

                <Text style={[styles.textbottom]}> Already have  an account?
                </Text>
                <Tile title='Login'
                  onPress={handleSign}
                />

              </View>
            </View>


          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default sginup;

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  secttion: {
    width: '100%',
    height: 'auto',
    marginTop: 50,
  },
  titleSignup: {
    width: '100%',
    height: 30,
  },
  TextBack: {
    width: '80%',
    height: 50,
  },
  fromSignup: {
    width: '80%',
    height: 'auto',
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  textFrom: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  },
  texttYour: {
    marginBottom: 20,
    marginLeft: 25
  },
  nameSignup: {},
  emailSignup: {},
  passwordSignup: {},
  ConfirmpasswordSignup: {},

  mtop: {
    marginTop: 30
  },
  mtopButtonChange: {
    marginTop: 100
  },
  buttons: {
    marginTop: 50
  },
  textbottom: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center'
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
    justifyContent: 'flex-start',
  },
  flexDirectionRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }

});