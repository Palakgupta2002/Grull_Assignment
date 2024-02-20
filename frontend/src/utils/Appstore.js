import {configureStore} from "@reduxjs/toolkit"
import userSlicereducer from "./userSlice"
import cartReducer from "./cartSlice"
const appStore = configureStore(
    {
        reducer:{
        userAuth:userSlicereducer,
        cartItem:cartReducer

        }
    }
);
export default appStore