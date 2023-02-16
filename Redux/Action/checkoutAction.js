import axios from 'axios'



export const placeOrder = (name,email,number,address,cartItems,total) => async (dispatch) =>{
    console.log('dasfasdfasdf-limits',email)

    try {
        dispatch({
            type: "allOrdertRequest",
        })
        let data  = new FormData();
    
        data.append('name',name)
        data.append('email', email)
        data.append('number', number)
        data.append('address', address)
        data.append('order', cartItems)
        data.append('total', total)
        const response =  await axios.post("https://trendy.wasay.me/PostOrder.php",data,{
            headers: {
                            'Content-Type': 'multipart/form-data', 
                            
                    },
        })
        console.log(response.data);
        // console.log("new api data asdfasdfasd",responses.data.products)
        dispatch({
            type: "allOrderSuccess",
            payload:responses.data,
        });
    } catch (error) {
        dispatch({
            type: 'allOrderFail',
            payload: "error.responses.data.products.message",
        });
    }
};