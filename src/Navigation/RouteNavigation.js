import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Selector, Splash,FetchProducts,TryScreen,GetFace,GetSize,ProductCard, Cart, Camera, Checkout, BottomTab} from '../screens'
import { TabActions } from '@react-navigation/native';


const Stacks = createNativeStackNavigator();
const RouteNavigation = () => {
    return (
      
        <Stacks.Navigator  initialRouteName='Splash'>
        
          <Stacks.Screen
                name='Splash'
                component={Splash}
                options={{
                    headerShown:false,
                }}
            />
           
             <Stacks.Screen
                name='Camera'
                component={Camera}
            />
          
           
          
            <Stacks.Screen
                name="BottomTab"
                component={BottomTab}
                options={{
                    headerShown:false,
                }}
            />
            <Stacks.Screen
                name='TryScreen'
                component={TryScreen}
            /> 
        </Stacks.Navigator>
        
    )
}

export default RouteNavigation

const styles = StyleSheet.create({})