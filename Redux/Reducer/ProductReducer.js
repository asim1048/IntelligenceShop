import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    
    products:[]
}

export const productReducer = createReducer(initialState, {
        allProductRequest: state =>{
            state.loading =true;
        },
        allProductSuccess: (state, action) =>{
            (state.loading = false),
            (state.products = action.payload),
            (state.productCount = action.payload.productCount);
            state.resultPerPage = action.payload.resultPerPage;
            state.filteredProductsCount = action.payload.filteredProductsCount;
        },
        allProductFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
});