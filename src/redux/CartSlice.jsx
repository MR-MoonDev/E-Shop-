import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalQuantity : 0,
  totalPrice:0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state,action){
    const newItem = action.payload;
    const itemsIndex = state.products.find((item)=> item.id === newItem.id);
    if(itemsIndex){
        itemsIndex.quantity++;
        itemsIndex.totalPrice += newItem.price;
    }else{
        state.products.push({
            id:newItem.id,
            name:newItem.name,
            price:newItem.price,
            quantity:1,
            totalprice:newItem.price,
            image:newItem.image
        })
    }
    state.totalPrice += newItem.price;
    state.totalQuantity++;
    }
  },
});
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;
