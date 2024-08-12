import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemsIndex = state.products.find((item) => item.id === newItem.id);
      if (itemsIndex) {
        itemsIndex.quantity++;
        itemsIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFormCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.totalquantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    IncreaseQunatity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreaseQunatity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity--;
          state.totalPrice -= findItem.price;
        }
      }
    },
  },
});
export const { addToCart, removeFormCart, IncreaseQunatity, decreaseQunatity } =
  cartSlice.actions;
export default cartSlice.reducer;
