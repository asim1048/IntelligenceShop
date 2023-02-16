import {configureStore} from '@reduxjs/toolkit'
import { productReducer } from './Reducer/ProductReducer';
import { CartReducer } from './Reducer/CartReducer';
import { CheckoutReducer } from './Reducer/CheckoutReducer';
const Store =  configureStore({
 reducer:{  
    products: productReducer,
    cartItem: CartReducer,
    total: CartReducer,
    order: CheckoutReducer,
}
});
export default  Store;