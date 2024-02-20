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
            const indexToDelete = state.cart.findIndex(item => item.id === action.payload.id);
            if (indexToDelete !== -1) {
                state.cart.splice(indexToDelete, 1);
            }
        }
    }
});

export const { addToCart, clearCart, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
