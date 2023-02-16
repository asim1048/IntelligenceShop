import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  useCameraDevices,
  Camera,CameraPermissionStatus
 
} from 'react-native-vision-camera';
import { useRef } from 'react';
import { vh, vw } from '../variable/demension';
import { useState,useEffect } from 'react';
import axios from 'axios';


const CameraScreen = ({ navigation,  route }) => {
  
  const [displaystyle, setdisplaystyle] = useState("none");
  const { cameraType } = route.params;
  const [cameraPermission, setCameraPermission] = useState(CameraPermissionStatus);
  const camera = useRef(null)
  const devices = useCameraDevices();
  console.log(displaystyle)
  //TODO: add check for front or back using nav props
  if (cameraType == 'back') {
    deviceType = devices.back
  }
  else{
     deviceType = devices.front
  }
  const device = deviceType
  console.log("image",  cameraType);
  const fun = ()=>{
    setdisplaystyle("flex")
    console.log(displaystyle)
  }
const captureImage=async()=>{
  setdisplaystyle("flex")
  
  try {
    const photo = await camera.current.takePhoto();
    console.log("image",photo.path,cameraType);
  
    if(cameraType == 'back'){
      const imageObj={
        uri: 'file://'+photo.path, 
        name:"myfile",
        type: 'image/jpg',
    }
    let data  = new FormData();
    console.log(imageObj);
    data.append('media',imageObj)
    data.append('models', 'properties')
    data.append('api_user', '229384262')
    data.append('api_secret', 'wSTbTBiQn5NGue4cPtHF')
     const response = await axios.post("https://api.sightengine.com/1.0/check.json",data,{
            headers: {
                            'Content-Type': 'multipart/form-data', 
                            
                    },
        })
        console.log(response.data);
      navigation.navigate('FetchProducts',{
        productsType:"Shoes",
      r :response.data.colors.dominant.r,
      g : response.data.colors.dominant.r,
      b : response.data.colors.dominant.r,
      width : 100,
      height : 100,
      tag : null,
      })
      console.log("BACK",cameraType);
        }
        else{


          const imageObjs={
            uri: 'file://'+photo.path,
            name:"myfile",
            type: 'image/jpg',
        }
        let api  = new FormData();
        console.log(imageObjs);
        api.append('file',imageObjs )
        api.append('detection_flags', 'propoints,classifiers,content')
          const respise =  await axios.post( "https://betaface-face-recognition-v1.p.rapidapi.com/media/file",
          api,   
          { headers: {
                  'X-RapidAPI-Host': 'betaface-face-recognition-v1.p.rapidapi.com', 
                  'X-RapidAPI-Key': 'b5a37d1c65mshe0659e49053ed3cp1ad538jsn4d92631d1664', 
                  'Content-Type': 'multipart/form-data', 
                  'Accept': 'application/json',
          }},
              
          )
          console.log("sdafasdfasdfasd",respise.data)
          console.log("sdafasdfasdfasd",respise.data.media.faces[0].tags[27].name)
      //api for front camera
      navigation.navigate('FetchProducts',{
        productsType:"Glasses",
      r : null,
      g : null,
      b : null,
      width : respise.data.media.faces[0].width,
      height : respise.data.media.faces[0].height,
      tag : respise.data.media.faces[0].tags[27].confidence,
        
      })
      console.log("fRONT",cameraType);
        } 
  } catch (error) {
    alert(error);
  }
 
}
useEffect(() => {
  Camera.getCameraPermissionStatus().then(setCameraPermission);
  
}, []);
console.log( cameraPermission)
if(cameraPermission == "authorized"){
  return (
    <View style={{flex:1,}}>

          {device != null && (
 <Camera
 ref={camera}
      device={device}
      isActive={true}
      photo={true}
      style={{flex:1,}}
    />)}
    <View style={{position:"absolute",display:displaystyle,width:200,height:100,left:"20%",top:"45%",backgroundColor:"#fff",flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
    <Text style={{fontSize:18,color:"#000"}}>Wait Processing</Text>
    
    </View>
    <TouchableOpacity style={styles.captureBtn} onPress={captureImage}/>
    </View>
  )
}
else{
  return (
  <View style={{flex:1, flexDirection:'row',justifyContent:"center",alignContent:"center",alignItems:"center"}}><Text style={{color:"#000",fontSize:18}}>No permission For Camera</Text>
  <Text style={{color:"#000",fontSize:18}}>Please Provide Camera Permission</Text>
  </View>)
}
}

export default CameraScreen

const styles = StyleSheet.create({
    texts:{
        color:"black",
    },
    captureBtn:{
      backgroundColor:"#FFF",
      width:6*vh,
      height:6*vh,
      borderRadius:6*vh,
      position:"absolute",
      bottom:3*vh,
      left:45*vw,
    
    }
})