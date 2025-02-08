import {createSlice} from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice ({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state, action)=> {
      const itemInCart = state.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        // If item exists, increase its quantity
        itemInCart.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity = 1
        state.push({ ...action.payload, quantity: 1 });
      }

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart : (state,action)=> {
      const updatedCart = state.filter((item)=> item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload);
    
      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          // Decrease the quantity
          itemInCart.quantity -= 1;
        } else {
          // Remove the item if quantity reaches 0
          return state.filter((item) => item.id !== action.payload);
        }
      }
    
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
  },
});


export const { addToCart, removeFromCart ,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
