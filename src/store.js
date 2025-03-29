import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxslice/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  }, 
});

export default store;
