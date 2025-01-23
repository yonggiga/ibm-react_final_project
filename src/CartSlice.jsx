import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const addedItem = state.items.find(x=>x.name === action.payload.name);
        if (addedItem){
          addedItem.quantity += 1;
        }
        else{
          state.items.push({...action.payload, quantity: 1});
        }
        
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(x => x.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const updateItem = state.items.find(x => x.name === action.payload.name);
        if (updateItem){
          if (action.payload.upType === 1){
              updateItem.quantity += 1;
          }else if (action.payload.upType === 0 && updateItem.quantity > 1){
              updateItem.quantity -= 1;
          }
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
