import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        amount: 0,
        selectedProducts: [],
    },
    reducers: {
        addProduct: (state, action) => {
            for (let item of state.selectedProducts) {
                if (item.id === action.payload.id) {
                    return;
                }
            }
            state.amount = state.amount += 1
            state.selectedProducts = [...state.selectedProducts, action.payload]
        },
    },
});

export const { addProduct } = cartSlice.actions;

export const selectCartAmount = (state) => state.cart.amount;
export const selectSelectedProducts = (state) => state.cart.selectedProducts;

export default cartSlice.reducer;
