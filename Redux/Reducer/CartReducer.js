import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    
    cartItem:[],
    total:0
}

export const CartReducer = createReducer(initialState, {
    addItem: (state, action) =>{
       const itemInCart = state.cartItem.find((item) => item.id === action.payload.id);
        if (itemInCart) {
            state.cartItem ;
            state.total ;
          } else {
            state.cartItem =[...state.cartItem,action.payload];
            state.total += action.payload.price;
          }
       
       
    },
    IncreaseQuantity: (state, action) =>{
      const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
      // if (itemInCart) {
      //    // state.cartItem = [...state.cartItem, quantity:cartItem.quantity+1 ]
      //     // state.total += action.payload.price;
      //     return [...state, ...itemInCart,{ item: action.item, quantity: action.quantity + 1 }];


      //   } else {
      //     state.cartItem =[...state.cartItem,action.payload];
      //     state.total += action.payload.price;
      //   }
      var newCart = state.cartItem
       newCart[itemIndex].quantity = newCart[itemIndex].quantity+1
       state.total += newCart[itemIndex].Actualprice
       newCart[itemIndex].price += newCart[itemIndex].Actualprice
       
      state.cartItem =newCart;
    },   
    DecreaseQuantity: (state, action) =>{
      const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
      // if (itemInCart) {
      //    // state.cartItem = [...state.cartItem, quantity:cartItem.quantity+1 ]
      //     // state.total += action.payload.price;
      //     return [...state, ...itemInCart,{ item: action.item, quantity: action.quantity + 1 }];


      //   } else {
      //     state.cartItem =[...state.cartItem,action.payload];
      //     state.total += action.payload.price;
      //   }
      var newCart = state.cartItem
       newCart[itemIndex].quantity = newCart[itemIndex].quantity-1
       state.total -= newCart[itemIndex].Actualprice
       newCart[itemIndex].price += newCart[itemIndex].price
       
      state.cartItem =newCart;
    },    
    emptyCart: (state, action) =>{
     
     
       
      state.cartItem =action.payload;
      state.total = 0
     },
    RemoveItem: (state, action) =>{
      const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
      var newCartItem = state.cartItem
      state.total -= newCartItem[itemIndex].Actualprice * newCartItem[itemIndex].quantity
      state.cartItem=  newCartItem.filter((_, i) => i !== itemIndex);
      
    },
});