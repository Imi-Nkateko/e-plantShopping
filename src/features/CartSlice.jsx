import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],           // Array of cart items
  totalQuantity: 0,    // Total number of items in cart
  totalAmount: 0,      // Total price of all items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart or increase quantity if exists
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Add new item
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.price) * (newItem.quantity || 1),
          image: newItem.image,
          description: newItem.description || '',
        });
      }
      
      // Recalculate totals
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
    },
    
    // Remove entire item from cart by id
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      
      // Recalculate totals
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
    },
    
    // Update quantity of a specific item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        // Validate quantity (minimum 1)
        const newQuantity = Math.max(1, quantity);
        item.quantity = newQuantity;
        item.totalPrice = item.price * newQuantity;
        
        // Recalculate totals
        state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      }
    },
    
    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

// Export actions
export const { 
  addItem, 
  removeItem, 
  updateQuantity, 
  clearCart 
} = cartSlice.actions;

// Create and export store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Export selectors for reusable logic
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
export const selectCartTotalAmount = (state) => state.cart.totalAmount;
export const selectCartItemById = (state, id) => 
  state.cart.items.find(item => item.id === id);

export default cartSlice.reducer;
