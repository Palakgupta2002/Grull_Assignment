import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userauth',
    initialState: {
        userAuth: false,
        formData:{}
    },
    reducers: {
        isAuth: (state,action) => {
            state.userAuth = true ; 
            state.formData=action.payload
        }
    }
});

export const { isAuth } = userSlice.actions;
export default userSlice.reducer;
