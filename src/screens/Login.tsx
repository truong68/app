import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import { StyleSheet, View, SafeAreaView, Text, Button, Image, TextInput, Alert, TouchableOpacity } from 'react-native';



const Login = ({ navigation }: { navigation: any }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Xử lý đăng nhập
  };

  return (

    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.secttion, styles.fDirectionRowCenter,]}>
          <View style={[styles.textLogin]}>
            <Text style={[styles.texttile]}>
              Login in with
            </Text>
          </View>
          <View style={[styles.socialNetwork, styles.fDirectionRowBetween]}>
            <View style={[styles.IconsocialNetwork, styles.fDirectionRowCenter]}>
              <Image source={require
                ('../images/google.png')} style={[styles.icon]} />
              <Text style={[styles.textIocn]}>Google</Text>
            </View>
            <View style={[styles.IconsocialNetwork, styles.fDirectionRowCenter]}>
              <Image source={require
                ('../images//microsoft.png')} style={[styles.icon]} />
              <Text style={[styles.textIocn]}>Microsoft</Text>
            </View>
            <View style={[styles.IconsocialNetwork, styles.fDirectionRowCenter]}>
              <Image source={require
                ('../images//facebook.png')} style={[styles.icon]} />
              <Text style={[styles.textIocn]}>Facebook</Text>
            </View>
            <View style={[styles.IconsocialNetwork, styles.fDirectionRowCenter]}>
              <Image source={require
                ('../images//apple.png')} style={[styles.icon]} />
              <Text style={[styles.textIocn]}>Apple</Text>
            </View>

          </View>

        </View>
        <View style={[styles.secttion, styles.flexDirectionRow]}>

          <View style={styles.hairline} />
          <Text style={styles.hairText}>OR</Text>
          <View style={styles.hairline} />

        </View>
        <View style={[styles.secttion, styles.flexDirectionRowCenter]}>
          <View style={[styles.fromlogin]}>
            <Text style={[styles.textFrom]}>Username of Email</Text>
            <TextInput
              style={styles.input}
              // placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Text style={[styles.textFrom]}>Password</Text>
            <TextInput
              style={styles.input}
              // placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => { navigation.push('Signup') }}>
              <Text style={{ marginLeft: 10, fontSize: 13, marginBottom: 15, color: 'black' }}>Forget Password ?</Text>
            </TouchableOpacity>

            <Button title="Log in"
              color="#78BB07"
              onPress={() => {
                navigation.navigate('Home'), Alert.alert('Chúc mừng', 'Bạn đã đăng nhập thành công ')
              }}
            //  style={styles.buttons}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    // backgroundColor:'green'
  },
  textLogin: {
    width: '100%',
    height: 'auto',
    // backgroundColor:'red',
  },
  texts: {
    marginLeft: 30,
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'blod',
    fontFamily: 'AvenirNext-Bold',
  },
  texttile: {
    marginLeft: 30,
    marginBottom: 20,
    color: 'black'
  },

  socialNetwork: {
    width: '85%',
    height: 80,
    // backgroundColor:'blue'
  },
  IconsocialNetwork: {
    width: 80,
    height: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 12
  },
  textIocn: {
    fontSize: 14,
    fontFamily: '',
    color: '#61698F',
    marginTop: 5,
  },
  hairline: {
    backgroundColor: '#8C93B7',
    height: 2,
    width: 140,
    marginTop: 15,
  },
  hairText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 20,
    color: '#8C93B7',
    marginLeft: 20,
    marginRight: 20
  },
  fromlogin: {
    width: '80%',
    height: 'auto',
    // backgroundColor:'gold'
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    color: 'black'
  },
  textFrom: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  },





  mtop: {
    marginTop: 30
  },
  mtopButtonChange: {
    marginTop: 100
  },
  buttons: {
    width: 200,
    height: 80,
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
  },
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }

});