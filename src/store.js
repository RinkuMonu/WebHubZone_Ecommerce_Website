import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reduxslice/CartSlice';
import wishlistReducer from './reduxslice/WishlistSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  }, 
});

export default store;
