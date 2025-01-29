import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxslice/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }, 
});

export default store;
