import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text onPress={()=> navigation.navigate('Selector')}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})