import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    
    Order:[]
}

export const CheckoutReducer = createReducer(initialState, {
    allOrdertRequest: state =>{
            state.loading =true;
        },
        allOrderSuccess: (state, action) =>{
            (state.loading = false),
            (state.Order = action.payload);
            
        },
        allOrderFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
});