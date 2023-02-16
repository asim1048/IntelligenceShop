import { StyleSheet, Text, TextInput, View,TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { vh, vw } from '../variable/demension'
import { useDispatch, useSelector } from 'react-redux'

import { placeOrder } from '../../Redux/Action/checkoutAction'
import { StackActions } from '@react-navigation/native'
const Checkout = ({navigation}) => {
  const { cartItem } = useSelector(state => state.cartItem);
  const { total } = useSelector(state => state.total);
  const { order } = useSelector(state => state.order);
  const [name , setname] = useState('')
  const [email , setemail] = useState('')
  const [number , setnumber] = useState('')
  const [address , setaddress] = useState('')
  const dispatch = useDispatch();
 

  cartItems = JSON.stringify(cartItem);
  
   myOrder = (name,email,number,address,cartItems,total)=> {
    console.log("tiis");
   
    dispatch(placeOrder(name,email,number,address,cartItems,total));
    //navigation.navigate('TryScreen')
    navigation.dispatch(StackActions.replace('TryScreen'))

  }
  return (
    <View>
        <ScrollView style={styles.Container}>
            <View styles={styles.formControll}>
                <Text style={[styles.label,styles.TextColor]}>Name</Text>
                <TextInput style={[styles.Input,styles.TextColor]}
                 placeholder='Enter Here'
                 placeholderTextColor="#222B45"  
                 onChangeText={newText => setname(newText )}
                  
                 />
                 
            </View>

            <View style={styles.formControll}>
                <Text style={[styles.label,styles.TextColor]}>Email</Text>
                <TextInput style={[styles.Input,styles.TextColor]}
                 placeholder='Enter Here'
                 placeholderTextColor="#222B45" 
                 onChangeText={newText => setemail(newText )}
                  />
            </View>

            <View style={styles.formControll}>
                <Text style={[styles.label,styles.TextColor]}>Address</Text>
                <TextInput style={[styles.Input,styles.TextColor]}
                 placeholder='Enter Here'
                 placeholderTextColor="#222B45"  
                 onChangeText={newText => setaddress(newText )}
                 />
            </View>

            <View style={styles.formControll}>
                <Text style={[styles.label,styles.TextColor]}>Phone</Text>
                <TextInput style={[styles.Input,styles.TextColor]}
                 placeholder='Enter Here'
                 placeholderTextColor="#222B45"  
                 keyboardType='numeric'
                 onChangeText={newText => setnumber(newText )}
                 />
            </View>
            
            <TouchableOpacity style={styles.orderButton} onPress={() => myOrder(name,email,number,address,cartItem,total)}>
            <Text style={styles.orderText} >Place Order
           </Text>
          </TouchableOpacity>
        </ScrollView>
      
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
    Container:{
        width:"100%",
        paddingHorizontal:15,
        paddingBottom:15,
        color:"",
    },
    formControll:{
        paddingVertical:10,
    },
    TextColor:{
        color: "#222B45",
        fontWeight:"500"
      },
      label:{
        fontWeight:"500",
        paddingVertical:10
      },
      Input:{
        borderColor:"#222B45",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10
      },
      orderButton:{
        width: "100%",height:50, 
          borderRadius: 1 * vw, backgroundColor:"#254EDB", flexDirection:"row",justifyContent:"center",alignContent:"center",alignItems:"center",marginVertical:15
      },
      orderText:{
        fontWeight:"500",
        color:"#fff"
      }
          
})