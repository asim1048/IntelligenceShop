import axios from 'axios'



export const PostProducts = (datas) => async (dispatch) =>{
    const imageObj={
        uri: 'file://'+datas,
        name:"myfile",
        type: 'image/jpg',
    }
    let data  = new FormData();
    console.log(imageObj);
    data.append('file',imageObj)
    data.append('detection_flags', 'propoints,classifiers,content')

    //console.log('dasfasdfasdf-limits',limits)
    try {
        dispatch({
            type: "allGlassesRequest",
        })
       
        const respise =  await axios.post( "https://betaface-face-recognition-v1.p.rapidapi.com/media/file",
        data,   
        { headers: {
                'X-RapidAPI-Host': 'betaface-face-recognition-v1.p.rapidapi.com', 
                'X-RapidAPI-Key': 'b5a37d1c65mshe0659e49053ed3cp1ad538jsn4d92631d1664', 
                'Content-Type': 'multipart/form-data', 
                'Accept': 'application/json',
        }},
            
        )
        console.log("sdafasdfasdfasd",respise.data)
        dispatch({
            type: "allGlassesSuccess",
            payload:respise.data.media,
        });
    //    await  axios({
    //         method: "post",
    //         url: "https://betaface-face-recognition-v1.p.rapidapi.com/media/file",
           
            
    //       })
    //       .then((response) => {
    //         // console.log("new api data asdfasdfasd",responses.data.products)
    //         dispatch({
    //             type: "allGlassesSuccess",
    //             payload:response.data.media,
    //         });
    //         console.log(response.data.media.faces[0].width,response.data.media.faces[0].height)
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //    });
       
        // console.log("sdafasdfasdfasd",responses.data)
       // console.log("new api data asdfasdfasd",responses.data.products)
        // dispatch({
        //     type: "allGlassesSuccess",
        //     payload:responses.data,
        // });
    } catch (error) {
        dispatch({
            type: 'allGlassesFail',
            payload: error
        });
    }
};