import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native'
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import { AddToCart } from '../../Redux/Action/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useContext } from 'react'
import { vw, vh } from '../variable/demension';
import {CatageoryContext} from '../Context/AppContext';
const ProductCard = ({ products, navigation }) => {
  
  const { setImage } = useContext(CatageoryContext);
  const dispatch = useDispatch();

  
    
  
    getProduct= (cartProduct,quantity)=>{
    // console.log(product.title)
    dispatch(AddToCart(cartProduct,quantity));}
    var image;
  if(products.image[0] !== ''){
  image = "https://trendy.wasay.me/"+products.image[0];
  // console.log(image )
  }
  else{
    image ='https://trendy.wasay.me/uploads/defaultMat_Base_Color-BROWN.jpg'
  }
  if(products.colors == "Choose..."){
    color = products.glasses_shape
    
  }
  else{
    color = products.colors
  }
  
  
  return (
  

    <View style={styles.mycontainer}>
      <View style={styles.productsContainer}>
        <View style={styles.imageBox}>
          <View style={{ width: "100%", height: "100%"}}>
          
         
          <Image source={{ uri: image }} style={styles.image}
            // resizeMode="cover"
          />
           </View>
        </View>
        <View style={styles.disBox}>
        <Text style={[styles.productName, styles.TextColor]}>{products.name?.substring(0, 20)}</Text>
        <Text style={[styles.productName ,styles.TextColor]}>{products.brand?.substring(0, 20)}</Text>
        <Text style={[styles.productName ,styles.TextColor]}>{color?.substring(0, 20)}</Text>
       
        <View style={styles.productsButtons}>
        <Text style={styles.productPrice}> Rs {products.price}</Text>
          <View style={{flexDirection:"row", flexWrap:"wrap",justifyContent:"flex-end", paddingHorizontal:2*vw}}>
          <TouchableOpacity style={styles.ViewButton} onPress={()=>{navigation.navigate('TryScreen',{image:image})}}>
          <Text style={styles.dd} >Try</Text></TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}><Text style={styles.cc} onPress={() => getProduct (products,1)}>
           <ShoppingCartIcon color="white"  size={6*vw} /></Text>
          </TouchableOpacity>
      
          </View>
         
        </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  mycontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:"50%",
    
   padding:2*vw,
   

  },
  productsContainer: {
    backgroundColor: "blue",
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    width: '100%',elevation:15,
    backgroundColor: '#fff',
  height:"100%",
  
    // backgroundColor:"blue",
    // elevation: 20,
    // shadowColor: '#dedede',  
    // paddingHorizontal:1*vw,
    // paddingVertical:1*vh,
    borderRadius: 3 * vw,
  }, imageBox: {
    // backgroundColor:"blue",
     padding:.1 * vh,
    height: 150, maxWidth: '100%', minWidth: '100%', backgroundColor: '',
  },
  image: {
    width: '100%',
    height: '100%',
    
    resizeMode: 'center',
    borderTopRightRadius: 2 * vw,
    borderTopLeftRadius: 2 * vw,

  },
  disBox: {
    
    padding:1 * vh, width: '100%', backgroundColor: '', position: 'relative',
   
  }, productName: { paddingBottom:2*vh, minHeight: 1, maxWidth: '100%', backgroundColor: '',  color: 'black',  },
  productsButtons: { flexDirection:"row", flexWrap:"wrap",justifyContent:"space-between", 
  paddingVertical:2*vh,alignContent:"center",alignItems:"center",
},
productPrice:{ color:"#000"},
  cartButton: { width: 35,height:35, marginLeft:1*vw,paddingVertical:1.5*vw,paddingHorizontal:1.1*vw, borderRadius: 1 * vw, backgroundColor:"#254EDB", flexDirection:"column",justifyContent:"center",},
  cc: { color: 'black' , textAlign:'center', paddingVertical:2,  marginRight:0*vw,},
  ViewButton: { width: 35,height:35,  backgroundColor:"#254EDB", borderRadius: 1 * vw,flexDirection:"column",justifyContent:"center",  },
  dd: { color: 'white', textAlign:'center', },
  TextColor:{
    color: "#222B45",
  },
})