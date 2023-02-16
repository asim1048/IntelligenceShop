import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState, useContext, useRef, } from 'react'
import { vw, vh } from '../variable/demension';
import { emptyCart } from '../../Redux/Action/CartAction';
import { useDispatch } from 'react-redux';
import { ARKit } from 'react-native-arkit';


import { CatageoryContext } from '../Context/AppContext';
import {
  useCameraDevices,
  Camera, CameraPermissionStatus

} from 'react-native-vision-camera'
const TryScreen = ({ navigation, route }) => {



  const { cameraType1 } = useContext(CatageoryContext);
  console.log("Type", cameraType1)

  const { image } = route.params;
  const [photoo, setPhoto] = useState();
  const dispatch = useDispatch();
  const [displaystyle, setdisplaystyle] = useState("none");
  const cameraType = cameraType1;
  const [cameraPermission, setCameraPermission] = useState(CameraPermissionStatus);
  const camera = useRef(null)
  const devices = useCameraDevices();
  console.log(displaystyle)
  //TODO: add check for front or back using nav props
  if (cameraType == 'back') {
    deviceType = devices.back
  }
  else {
    deviceType = devices.front
  }
  const device = deviceType
  console.log("image", cameraType);
  const fun = () => {
    setdisplaystyle("flex")
    console.log(displaystyle)
  }
  dispatch(emptyCart());
  const captureImage = async () => {
    try {
      const phot = await camera.current.takePhoto();
      setPhoto(phot.path)
      console.log(photoo)
    } catch (error) {
      alert(error);
    }
  }

  // const ARScene = () => {
  //   const [faceDetected, setFaceDetected] = useState(false);

  //   const onFaceDetected = () => {
  //     setFaceDetected(true);
  //   };

  //   return (
  //     <ViroARScene>
  //       {faceDetected && (
  //         <ViroNode>
  //           <Viro3DObject source={{ uri: image }} />
  //         </ViroNode>
  //       )}
  //     </ViroARScene>
  //   );
  // };
  return (
    <View style={styles.Container}>
      <View style={{ flex: 0.5, }}>
        {device != null && (
          <Camera
            ref={camera}
            device={device}
            isActive={true}
            photo={true}
            style={{ flex: 1, }}
          /> )}
      </View>
      <View style={{ flex: 0.5, }}>
        <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={captureImage} style={{ marginTop: 15, height: 50, width: 150, borderRadius: 15, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Capture Image</Text>

        </TouchableOpacity>
        </View>
        {photoo && (
          <View style={{ marginTop: 10,flex:0.8 }}>
            <ImageBackground
              source={{ uri: "file://" + photoo }}
              style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain', marginTop: 10, }}
            >
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginBottom:cameraType1=="front"?90:-120 }}>
                <Image source={{ uri: image }} style={{ height: cameraType1=="front"?30:80, width:cameraType1=="front"?90:130 }} />
              </View>

            </ImageBackground>
          </View>
        )}

      </View>

    </View>
  )
}

export default TryScreen;

const styles = StyleSheet.create({
  Container:
  {
    flex: 1,
  },
})
// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, Button } from 'react-native';
// import { Camera } from 'react-native-vision-camera';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//   },
// });

// const TryScreen = () => {
//   const [imageUri, setImageUri] = useState(null);

//   const takePicture = async () => {
//     const photo = await Camera.takePicture();
//     setImageUri(photo.uri);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Click the button to take a picture</Text>
//       <Button title="Take Picture" onPress={takePicture} />
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//     </View>
//   );
// };

// export default TryScreen;