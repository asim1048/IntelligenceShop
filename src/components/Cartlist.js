import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { vh, vw } from '../variable/demension'
import { IncreaseQuantity,DecreaseQuantity,RemoveItem } from '../../Redux/Action/CartAction';
import { useDispatch, useSelector } from 'react-redux';

const Cartlist = ({Items}) => {
  const dispatch = useDispatch();
 
  IncreaseCartProduct= (cartProduct,quantity)=>{
    // console.log(product.title)
    dispatch(IncreaseQuantity(cartProduct,quantity));}
    DecreaseCartProduct= (cartProduct,quantity, ItemQuantity)=>{
     console.log(ItemQuantity)
    if(ItemQuantity>1){
      
       // console.log(Items.name)
        dispatch(DecreaseQuantity(cartProduct,quantity));}
        else if(ItemQuantity ==1){
   
        }
    }
    
  return (
    <View style={styles.listContainer}>
      <View style={styles.ImageContainer}><Image source={{uri :"https://trendy.wasay.me/"+Items.image}} style={styles.Image}/></View>
      <View style={styles.titleContainer}>
      <Text style={[styles.titleText,styles.TextColor]}>{Items.name}</Text>
        <Text style={[styles.titleText,styles.TextColor]}>{Items.Actualprice}</Text>
        <Text style={[styles.Removebtn,]}  onPress={() =>  dispatch(RemoveItem(Items))}>Remove</Text>
      </View>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityCounter} onPress={() => IncreaseCartProduct(Items,1)}><Text  style={styles.TextColor}>+</Text></TouchableOpacity>
        <View style={[styles.quantityCounter, styles.quantityText]}><Text style={styles.TextColor}>{Items.quantity}</Text></View>
        <TouchableOpacity style={styles.quantityCounter} onPress={() => DecreaseCartProduct(Items,1,Items.quantity)}><Text style={styles.TextColor}>-</Text></TouchableOpacity>
      </View>
    </View>




  )
}

export default Cartlist

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 5 * vw,
    padding: 2 * vh,
    elevation: 5,
    marginVertical: 5

  },
  ImageContainer: {
    backgroundColor: "#fff",
    width: "33.33%",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode:"cover"
   
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "33.33%",
    
  },
  titleText: {
    marginVertical: 5,
    fontSize: 16,
    maxHeight:20,
    fontStyle: "500",
   
  },
  quantityContainer:{
    paddingVertical: 10
  },
  quantityCounter: {
    padding: 1 * vw,
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    borderRadius: 100 * vw,
    flexDirection: "row",
    justifyContent: "center",
    elevation: 1 * vw,
    // width:"33.33%",
    borderWidth: 1,
    borderColor: "#F7F9FC",
   

  },
  
  quantityText: {
    backgroundColor: "transparent",
    elevation: 0,
    borderWidth: 0
  },
  Removebtn:{
    fontSize :12,
    color:"red",
    marginVertical:10,
    
  },
  TextColor:{
    color: "#222B45",
  }
})