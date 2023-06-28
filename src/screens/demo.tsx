// import { StyleSheet, View, ScrollView, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
// import React from 'react'
// import Swiper from 'react-native-swiper';

// const Detalis = ({navigation}: {navigation: any})  => {
//   return (
//       // <View style={styles.center}>
//       //   {/* <Button title="Go to Detailis" 
//       //   onPress={()=>{
//       //   navigation.push('Detalis');
//       // }} /> */}

//       // {/* <Button title="Go back home" 
//       //   onPress={()=>{
//       //   navigation.goBack();
//       // }} /> */}
      
//       // {/* <Button title="Login" onPress={()=>{
//       //   // navigation.navigate('Detalis');
//       //   navigation.navigate('Login');
//       // }} /> */}
      
//       // </View>
//       <SafeAreaView style={[styles.bgScreen]}>
//         <ScrollView showsVerticalScrollIndicator={true}>
//           <View style={[styles.container]}>
//           <View style={[styles.header,styles.mtop,styles.fDirectionbetween]}>
//                   <View style={[styles.headerLeft,styles.fDirectionbetween]}>
//                     <TouchableOpacity onPress={()=>{navigation.push('Cart')}}>
//                               <Image source={require('../images/menu.png')}style={[styles.iconHeader]} />
//                     </TouchableOpacity>
//                       <Text style={[styles.textMenu]}>PAGES</Text>                     
//                   </View>
//                   <View style={[styles.headerRight,styles.fDirectionbetween]}>
//                        <TouchableOpacity onPress={()=>{navigation.push('Cart')}}>
//                                <Image source={require('../images/shopping-cart.png')}style={[styles.iconHeader]}/>
//                        </TouchableOpacity>
//                        <Image source={require('../images/account.png')}style={[styles.iconHeader]}/>
//                   </View>

//               </View>
//                     <View style={[styles.title]}>
//                         <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center', color:'black'}}> 
//                                 Offer on Card Payments
//                         </Text>

//                     </View>
//                     <View style={[styles.sildeOffer]}>
//                                 <Swiper style={[styles.wrapper,styles.mtopBar]} showsButtons={false}>
                                      
//                                       <View style={styles.slide}>
//                                         <Image source={require('../images//Offer-one.png')}
//                                         resizeMode="contain"
//                                         style={[styles.image]}        />
//                                       </View>
//                                       <View style={styles.slide}>
//                                           <Image source={require('../images//Offer-two.png')}
//                                           resizeMode="contain"
//                                           style={[styles.image]}
                                          
//                                           />
//                                       </View>
//                                 </Swiper>
//                     </View>
//                     <View style={[styles.buttonUseMany]}>
//                        < TouchableOpacity style={styles.button}onPress={()=>{navigation.push('Oder');}}> 
//                               <Text style={styles.buttonText}> Oder Now!</Text>
//                        </TouchableOpacity>
//                        < TouchableOpacity style={styles.buttonUse}>
//                              <Text style={[styles.buttonText,styles.buttonCl]}>Give Feedback</Text>
                        
//                         </TouchableOpacity>
//                     </View>
                    
              
//               </View>
//           </ScrollView>
//       </SafeAreaView>
//       );
//   };


//   const styles = StyleSheet.create({
//     bgScreen:{
//       width:'100%',
//       height:'auto',
//       backgroundColor:'white'
//     },
//     container:{
//       flex: 1,
//       alignItems: 'center',
//       // backgroundColor:'blue'
//     },
//     header:{
//       width:'80%',
//       height:50,    
//       // backgroundColor:'green'
//     },
//     headerLeft:{
//       width:80,
//       height:50,
//       // backgroundColor:'red'
//     },
//     textMenu:{
//       fontSize:13,
//       fontWeight:'bold',
//       color:'black'
//     },
//     headerRight:{
//       width:80,
//       height:50,
//       // backgroundColor:'blue'
//     },
//     iconHeader:{
//       width:30,
//       height:40
  
//     },
//     title:{
//       width:'100%',
//       height:'auto',
//       marginTop:100,
//       // backgroundColor:'gray',
//     },
//     buttonUseMany:{
//       width:"80%",
//       height:150,
//       marginTop:80,
//       marginBottom:150
    
//     },
//     button: {
//       backgroundColor: '#AE4340',
//       padding: 20,
//       borderRadius: 5,
//       marginBottom:20
//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     buttonUse:{
//       backgroundColor:'white',
//       padding: 20,
//       borderRadius: 5,
//       marginBottom:20,
//       borderColor: "#AE4340",
//       borderWidth: 1,
//     },
//     buttonCl:{
//       color:'#AE4340',
      
//     },
  
  
  
//     mtop:{
//       marginTop:10,
//     },
//     mtopText:{
//       marginTop:30
//     },
//     mtopBar:{
//       marginTop:40
//     },
//     fDirectionbetween:{
//       flexDirection:'row',
//       alignItems:'center',
//       justifyContent:'space-between'
//     },
//     fDirectioncolumm:{
//       flexDirection:'column',
//       alignItems:'center'
  
//     },
  
  
//     sildeOffer:{
//       flex:1
//     },
//     wrapper: {
//       height: 350,
//     },
//     slide: {
   
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     image: {
//       width: '80%',
//       height:350,
//       alignSelf: 'center',
//     },
    
    
  
  
    
    
  
    
//   });
// export default Detalis;
