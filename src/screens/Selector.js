import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, {useContext} from 'react'
import { vh, vw } from '../variable/demension'
import { shoes1,glasses1 } from '../images';
import {CatageoryContext} from '../Context/AppContext';

const Selector = ({ navigation }) => {
    const { setCameraType,setProductType } = useContext(CatageoryContext);
 
    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <View style={styles.sectionsOne}>
                        <View style={styles.bgImgSec}>
                            <ImageBackground source={shoes1} style={styles.Image} >
                                <View style={{
                                    width: "100%", height: "100%", backgroundColor: "#000", opacity: .6, position: "absolute", height: "100%",
                                    width: "100%",
                                }}>
                                </View>
                                <View style={{ flexDirection: "column", flex: 1, justifyContent: "space-between", }}>
                                    <Text style={styles.heading}>Shoes</Text>
                                    <TouchableOpacity style={styles.button} onPress={()=>{setCameraType("back"); navigation.navigate('Camera',{cameraType:"back"});}}>
                                        <Text style={styles.Texts}>Shop Now</Text>
                                    </TouchableOpacity>
                                </View>

                            </ImageBackground>
                        </View>
                       
                </View>

                <View style={styles.sections}>
                    <View style={styles.bgImgSec}>
                        <ImageBackground source={glasses1} style={styles.Image} >
                            <View style={{
                                width: "100%", height: "100%", backgroundColor: "#000", opacity: .6, position: "absolute", height: "100%",
                                width: "100%",
                            }}>
                            </View>
                            <View style={{ flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                                <Text style={styles.heading}>Glasses</Text>
                                <TouchableOpacity style={styles.button} onPress={()=> {setCameraType("front");navigation.navigate('Camera' ,{cameraType:"front"});}}>
                                    <Text style={styles.Texts}>Shop Now</Text>
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>
                    </View>


                </View>
            </View>
        </View>
    )
}

export default Selector

const styles = StyleSheet.create({
    container:
    {
        width: vw * 100,
        height: "100%",
        // backgroundColor: 'green',

    },
    optionsContainer:
    {  height: "100%",
        flexDirection: 'row',  
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 2*vh,
        // backgroundColor: '#000',
    },
    sectionsOne: {
        height: "50%",
        width: 100 * vw,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
       

    },
    sections: {
        height: "50%",
        width: 100 * vw,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',

    },
    bgImgSec: {
        height: "100%",
        width: "100%",
        backgroundColor: "",
        paddingHorizontal: 1 * vh,
        paddingVertical: 1 * vh,


    },
    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: "relative",


    },
    heading: {

        fontSize: 24,
        padding: 2 * vh,
        color: "#fff",
        fontWeight: "500",



    },
    button: {
        borderColor: '#fff',
        borderRadius: 2 * vw,
        height: 40,



        color: '#fff',
        textAlign: 'center',
        flexDirection: 'row',
        alignSelf: "flex-end", margin: 2 * vh,
        alignContent: 'center',
        justifyContent: 'center',
    },
    Texts: {
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
    },
})