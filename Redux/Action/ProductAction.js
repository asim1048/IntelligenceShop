import axios from 'axios'



export const getProducts = (productsType,r=null,g=null,b=null,width=null,height=null,tags=null) => async (dispatch) =>{
    //console.log('dasfasdfasdf-limits',limits)
    try {
        dispatch({
            type: "allProductRequest",
        })
        const responses = await axios.get(`https://trendy.wasay.me/GetProducts.php?type=`+productsType+`&r=`+r+`&g=`+g+`&b=`+b+`&width=`+width+`&height=`+height+`&tags=`+tags);
       
        // const responses = await axios.get(`https://dummyjson.com/products?limit=6`);
       
        // console.log("sdafasdfasdfasd",responses.data)
        // console.log("new api data asdfasdfasd",responses.data.products)
        dispatch({
            type: "allProductSuccess",
            payload:responses.data.products,
        });
    } catch (error) {
        dispatch({
            type: 'allProductFail',
            payload: error.responses.data.products.message,
        });
    }
};