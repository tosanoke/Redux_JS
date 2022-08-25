import {configureStore} from "@reduxjs/toolkit";
import { cartSlice as cartReducer} from "./features/cart/cartSlice"


export const store = configureStore({
    reducer: {
        cart: cartReducer.reducer
    },
})