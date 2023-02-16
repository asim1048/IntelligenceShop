import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React, { useEffect, useState }  from 'react'
import { vw, vh } from '../variable/demension';
import { SparklesIcon } from "react-native-heroicons/solid";
import { shoes2,glasses1,glasses3,glasses2 } from '../images';
import {StackActions} from '@react-navigation/native'

const Splash = ({navigation}) => {
useEffect(() => {
  setTimeout(() => {
    // navigation.navigate('Selector')
    //navigation.navigate('Cart')
    navigation.dispatch(StackActions.replace('BottomTab'))
}, 3000);
})
  

  return (
    
    <View style={styles.Container}>
       <ImageBackground source={glasses2} style={styles.Image} >
       <View style={{ height : vh * 100,
        width: vw * 100,
        opacity:0.7,
      backgroundColor:"#000",
        backgroundColor:"#000",}}></View>
       </ImageBackground>
      <View style={styles.fluid}>
        {/* <SparklesIcon fill= "black" size={20*vw} /> */}
        <Text style={styles.Text }>Trendy Outfit</Text>
        
      </View>
      
    </View>
  )


}

export default Splash

const styles = StyleSheet.create({
    Container:
    {
        flexDirection :"row",
        flex: 1,
        height : vh * 100,
        width: vw * 100,
        alignContent:'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image:{
      height : vh * 100,
      width: vw * 100,
      flexDirection :"row",
      alignContent:'center',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    fluid:{
      position:"absolute",
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    Text:{
        textAlign:'center',
        paddingVertical: 1*vh,
        fontSize: 10 * vw,
        color:'#9c1309',
        fontWeight:"700"
        
       
    }
})