import { createSlice } from '@reduxjs/toolkit';

const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeItemFromWishlist: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
