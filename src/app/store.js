import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/Cart';

export const store = configureStore({
  reducer: {
    cart : CartReducer
  },
});
