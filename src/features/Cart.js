import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addProduct: (state , action) => {
            // check id product is already in cart
            const existingProduct = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
            // if product is in cart increment quantity of that product to 1
            // else add cart product + quantity = 1;
            if(existingProduct) {
                state.cartItems.map(cartItem => cartItem.id === existingProduct.id ? cartItem.quantity +=1 : null)
            } else {
                state.cartItems.push({...action.payload , quantity : 1});
            }
        },
        removeProduct: (state , action) => {
            // check id product is already in cart
            const existingProduct = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
            // if existingcart quantity > 1  decrement quantity to 1 
            if(existingProduct.quantity > 1) {
                state.cartItems.map(cartItem => cartItem.id === existingProduct.id ? cartItem.quantity -=1 : null)
            }
            
        },
        clearItemFromCart: (state , action) => {
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
        }


    }
})

export const { addProduct , removeProduct , clearItemFromCart } = CartSlice.actions;

export default CartSlice.reducer ;