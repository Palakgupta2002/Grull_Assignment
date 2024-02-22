import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
        deleteCartItem: (state, action) => {
            const idToDelete = action.payload;
            state.cart = state.cart.filter(item => item.id !== idToDelete);
        }
    }
});

export const { addToCart, clearCart, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
