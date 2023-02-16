import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    
    Shoes:[]
}

export const ShoesReducer = createReducer(initialState, {
        allShoesRequest: state =>{
            state.loading =true;
        },
        allShoesSuccess: (state, action) =>{
            (state.loading = false),
            (state.Shoes = action.payload);
           
        },
        allShoesFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
});