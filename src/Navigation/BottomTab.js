import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ShoppingCartIcon,HomeIcon } from "react-native-heroicons/outline";
import 
{ Home, Selector, Splash,FetchProducts,TryScreen,GetFace,GetSize,ProductCard, Cart, Camera, Checkout,
    CartNavigation,HomeNavigation} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
        screenOptions={{
        tabBarStyle: { paddingBottom: 5 ,height:50,paddingTop: 10},
        }}
    >
    <Tab.Screen name="HomeNavigation" component={HomeNavigation} 
         options={{
            headerShown:false,
            tabBarLabel:"Home",
            tabBarLabelStyle:{
                    color:'#000'
            },
            tabBarIcon: () => (
            <HomeIcon name="Home" color={'#000'}  />
          ),

        }}

    />
    <Tab.Screen name="CartNavigation" component={CartNavigation} 
        options={{
            headerShown:false,
            tabBarLabel:"Cart",
            tabBarLabelStyle:{
                    color:'#000'
            },
            tabBarIcon: () => (
            <ShoppingCartIcon name="Cart" color={'#000'}  />
          ),
        }}
    />
    
  </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})