import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import checkoutSlice from "./checkout-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        checkout: checkoutSlice.reducer,
    },
});

export default store;