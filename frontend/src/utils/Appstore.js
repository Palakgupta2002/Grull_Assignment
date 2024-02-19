import {configureStore} from "@reduxjs/toolkit"
import userSlicereducer from "./userSlice"
const appStore = configureStore(
    {
        reducer:{
        userAuth:userSlicereducer

        }
    }
);
export default appStore