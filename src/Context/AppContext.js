import {createContext, useState} from 'react';

export const CatageoryContext=createContext(null);

const AppContext=({children})=>{
    const [cameraType1,setCameraType]=useState('')
    const [image,setImage]=useState('')
    const [productType,setProductType]=useState('')
    return(
        <CatageoryContext.Provider value={{
            cameraType1,
            setCameraType,
            image,
            setImage,
            productType,
            setProductType,
        }}>
           {children}
        </CatageoryContext.Provider>
    )
}
export default AppContext;