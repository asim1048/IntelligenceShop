import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Selector, Splash,FetchProducts,TryScreen,GetFace,GetSize,ProductCard, Cart, Camera, Checkout, BottomTab} from '../screens'
import { TabActions } from '@react-navigation/native';


const Stacks = createNativeStackNavigator();
const CartNavigation = () => {
    return (
      
        <Stacks.Navigator  initialRouteName='Cart'>
        <Stacks.Screen
                name='Checkout'
                component={Checkout}
                
            />

             <Stacks.Screen
                name='Cart'
                component={Cart}
                options={{
                    headerTitle:"Cart",
                  
                }}
            />
                
          
           
        </Stacks.Navigator>
        
    )
}

export default CartNavigation

const styles = StyleSheet.create({})