import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vw, vh } from '../variable/demension';
const GetSize = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.fluid}>
      <Text style={styles.Text }>
        AR Screen</Text>
        <Text style={styles.Text}>
        Get Shoes size and color then send data to react </Text>
        <Text style={styles.Text } onPress={()=> navigation.navigate('Selector')}>
       Go Back</Text>
       <Text style={styles.Text } onPress={()=> navigation.navigate('FetchProducts')}>
       Go Products</Text>
      </View>
    </View>
  )
}

export default GetSize

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
    fluid:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    Text:{
        textAlign:'center',
        paddingVertical: 1*vh,
        
        color:'black',
        
       
    }
})