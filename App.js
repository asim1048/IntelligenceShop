import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RouteNavigation from './src/Navigation/RouteNavigation'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import FetchProducts from './src/components/FetchProducts'
import AppContext from './src/Context/AppContext';


const App = () => {
  return (
    //  <Splash />

    //<Home />
    <Provider store={Store}>
      <AppContext>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
      </AppContext>
    </Provider>
  



  )
}

export default App

const styles = StyleSheet.create({})