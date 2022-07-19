import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    items: [],
    totalProducts: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalAmount = state.totalAmount + newItem.price * newItem.quantity;
            if (!existingItem) {
                const totalPrice = newItem.quantity * newItem.price
                state.totalProducts = state.totalProducts + newItem.quantity;
                state.items.push({
                    name: newItem.name,
                    image: newItem.image,
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: totalPrice,
                    quantity: newItem.quantity,
                });
            } else {
                existingItem.quantity++;
                state.totalProducts++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalAmount = state.totalAmount - existingItem.price;
            state.totalProducts--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        removeAllItemsFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.items = state.items.filter(item => item.id !== id);
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price * existingItem.quantity;
            state.totalProducts = state.totalProducts - existingItem.quantity;
        },
        clearCart(state) {
            state.items = [];
            state.totalAmount = 0;
            state.totalProducts = 0;
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;
