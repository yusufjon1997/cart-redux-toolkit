import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addProduct: (state , action) => {
            return state.cartItems + action.payload
        }
    }
})

export const { addProduct } = CartSlice.actions;

export default CartSlice.reducer ;