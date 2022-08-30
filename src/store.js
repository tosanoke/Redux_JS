import {configureStore} from "@reduxjs/toolkit";
import { cartSlice as cartReducer} from "./features/cart/cartSlice"
import modalReducer from './features/modal/modalSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer.reducer,
        modal: modalReducer
    },
})


