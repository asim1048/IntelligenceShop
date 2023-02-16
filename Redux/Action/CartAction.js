export const AddToCart = (products,itemQuantity)=> async (dispatch) =>{
    cartItems={
        name:products.name,
        price: parseInt(products.price),
        Actualprice: parseInt(products.price),
        id:products.id,
        image:products.image[0],
        quantity:itemQuantity,
       

    }
try {
   
   // console.log("aaaaaaaaaction",cartItems)
    dispatch({
        type:"addItem",
        payload:cartItems
    
    })
} catch (error) {
    dispatch({
        type:"cartItemFail",
        payload:"Fail",
    })
}
}
export const IncreaseQuantity = (products,itemQuantity)=> async (dispatch) =>{
    cartinItems={
        name:products.name,
        price: products.price,
        id:products.id,
        image:products.image,
        quantity:products.quantity,
       

    }
try {
   
   //console.log("aaaaaaaaaction",cartItems)
    dispatch({
        type:"IncreaseQuantity",
        payload:cartinItems
    
    })
} catch (error) {
    dispatch({
        type:"cartItemFail",
        payload:"Fail",
    })
}
}
export const DecreaseQuantity = (products,itemQuantity)=> async (dispatch) =>{
    cartinItems={
        name:products.name,
        price: products.price,
        id:products.id,
        image:products.image,
        quantity:products.quantity,
       

    }
try {
   
   //console.log("aaaaaaaaaction",cartItems)
    dispatch({
        type:"DecreaseQuantity",
        payload:cartinItems
    
    })
} catch (error) {
    dispatch({
        type:"cartItemFail",
        payload:"Fail",
    })
}
}

export const emptyCart = ()=> async (dispatch) =>{
    cartinItems=[]
try {
   
   //console.log("aaaaaaaaaction",cartItems)
    dispatch({
        type:"emptyCart",
        payload:cartinItems
    
    })
} catch (error) {
    dispatch({
        type:"cartItemFail",
        payload:"Fail",
    })
}
}
export const RemoveItem = (products)=> async (dispatch) =>{
    cartinItems={
        name:products.name,
        price: products.price,
        id:products.id,
        image:products.image,
        quantity:products.quantity,
       

    }
try {
   
   //console.log("aaaaaaaaaction",cartItems)
    dispatch({
        type:"RemoveItem",
        payload:cartinItems
    
    })
} catch (error) {
    dispatch({
        type:"cartItemFail",
        payload:"Fail",
    })
}
}