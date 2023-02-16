import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Cartlist from '../components/Cartlist'
import { vh, vw } from '../variable/demension'
import { useDispatch, useSelector } from 'react-redux';


const Cart = ({navigation}) => {
  const { cartItem } = useSelector(state => state.cartItem);
  const { total } = useSelector(state => state.total);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.totalcontainer}>
        <View style={styles.totalbox}><View style={styles.totalDiv}><Text style={[styles.totalText, styles.TextColor]}>${total}</Text></View>
          <TouchableOpacity style={styles.orderButton} onPress={()=> navigation.navigate('Checkout')}>
            <Text style={[styles.orderText]}>Check Out</Text>
          </TouchableOpacity>
        </View>

      </View>
      <ScrollView >
      
        {(cartItem == []) ? <Text>Loading</Text> :

        cartItem && cartItem.map((i) => {
            { }
            return (<Cartlist key={i.id} Items={i} navigation={navigation}  totalPrice = {total}/>)
          })
        }
        {console.log("Product title", cartItem)}
      </ScrollView>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5 * vw,
    backgroundColor: "#F7F9FC",
    width: "100%",
    flex: 1,
  },
  totalcontainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    paddingVertical: 2 * vh,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 15,
    paddingHorizontal: 2 * vh,
    borderRadius: 2 * vh,
    elevation: 5,
  },
  totalbox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",

  },
  totalbox_text: {
    fontSize: 18,
    fontWeight: "500",

  },
  orderButton_box: {
    flexDirection: "row",
    justifyContent: "flex-end",

  },
  orderButton: {
    backgroundColor: "#254EDB",
    paddingVertical: 3 * vw,
    paddingHorizontal: 4 * vw,
    borderRadius: 4 * vw,
    height: 40,
  },
  orderText: {
    color: "#fff",
    fontWeight: "500",
  },
  totalDiv: {},
  totalText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 18,
  },
  TextColor: {
    color: "#222B45",
  }
})