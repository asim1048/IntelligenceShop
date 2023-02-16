import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Action/ProductAction';
import ProductCard from './ProductCard';
import { vh, vw } from '../variable/demension'

const FetchProducts = ({ navigation,  route}) => {
    const { productsType,r,g,b,width,height,tags } = route.params;
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector(state => state.products);
    const { cartItem } = useSelector(state => state.cartItem);
    const { total } = useSelector(state => state.total);
    useEffect(() => {
        if (error) {
            alert(error)
        }
        dispatch(getProducts(productsType,r,g,b,width,height,tags));
    }, [])
    
    if (products) {

    };
    //console.log("props"+JSON.stringify())
    return (
        
        <View style={{ flex:1, }}>
        <ScrollView style={{  padding: .5 * vh,  backgroundColor: "#F7F9FC",}}>
            <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
                {loading ? <Text>Loading</Text> :

                    products && products.map((i) => {
                        {  }
                        return (<ProductCard key={i.id} products={i} navigation={navigation} />)
                    })
                }
            </View>
            {/* {  console.log("Product total", total) } */}
            {/*console.log("Product title", products)*/}
           
        </ScrollView>

</View>


    )
}

export default FetchProducts

const styles = StyleSheet.create({})