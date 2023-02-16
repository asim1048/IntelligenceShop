import axios from 'axios'
import { useEffect, useState } from 'react';



export const PostShoes = (datas) => async (dispatch) =>{
   
    const imageObj={
        uri: 'file://'+datas, 
        name:"myfile",
        type: 'image/jpg',
    }
    let data  = new FormData();
    console.log(imageObj);
    data.append('media',imageObj)
    data.append('models', 'properties')
    data.append('api_user', '229384262')
    data.append('api_secret', 'wSTbTBiQn5NGue4cPtHF')
    //console.log('dasfasdfasdf-limits',limits)
    try {
        dispatch({
            type: "allShoesRequest",
        })
       
        const response = await axios.post("https://api.sightengine.com/1.0/check.json",data,{
            headers: {
                            'Content-Type': 'multipart/form-data', 
                            'Accept': 'application/json',
                    },
        })
        console.log(response.data);
        dispatch({
            type: "allShoesSuccess",
            payload:response.data,
        });
       
       
    //      return   axios({
    //         method: "post",
    //         url: "https://api.sightengine.com/1.0/check.json",
    //         headers: {
    //             'Content-Type': 'multipart/form-data', 
    //             'Accept': 'application/json',
    //     },
    //         data: data
            
    //       })
    //       .then((response) =>  {
    //         // console.log("new api data asdfasdfasd",responses.data.products)
           
           
            
    //         console.log(response.data.colors)
    //         return  {response};
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //    });
       
        // console.log("sdafasdfasdfasd",responses.data)
       // console.log("new api data asdfasdfasd",responses.data.products)
        // dispatch({
        //     type: "allShoesSuccess",
        //     payload:responses.data,
        // });
    } catch (error) {
        dispatch({
            type: 'allShoesFail',
            payload: "",
        });
    }
};