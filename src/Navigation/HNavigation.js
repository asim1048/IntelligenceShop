import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Selector, Splash,FetchProducts,TryScreen,GetFace,GetSize,ProductCard, Cart, Camera, Checkout, BottomTab} from '../screens'
import { TabActions } from '@react-navigation/native';


const Stacks = createNativeStackNavigator();
const HNavigation = () => {
    return (
      
        <Stacks.Navigator  initialRouteName='Selector'>
      
         <Stacks.Screen
                name='FetchProducts'
                component={FetchProducts}
                options={{
                    headerTitle:"Products",
                   
                }}
            />
          <Stacks.Screen
                name='Splash'
                component={Splash}
                options={{
                    headerShown:false,
                }}
            />
            <Stacks.Screen
                name='Selector'
                component={Selector}
                options={{
                    headerTitle:"Select",
                    headerBackAccessibilityLabel:false,
                    headerBackVisible:false
                }}
            />
             
            <Stacks.Screen
                name='Home'
                component={Home}
            />
            <Stacks.Screen
                name='GetSize'
                component={GetSize}
            />
            <Stacks.Screen
                name='GetFace'
                component={GetFace}
            />
            
             <Stacks.Screen
                name='ProductCard'
                component={ProductCard}
                options={{
                    headerTitle:"Products",
                    headerBackTitleVisible:false
                }}
            />
             
                
           
           
        </Stacks.Navigator>
        
    )
}

    export default HNavigation

const styles = StyleSheet.create({})