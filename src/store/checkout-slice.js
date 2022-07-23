import { createSlice } from "@reduxjs/toolkit";

const checkoutInitialState = { showCheckout: false }

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: checkoutInitialState,
    reducers: {
        showCheckoutHandler(state) {
            state.showCheckout = true;
        },
        hideCheckoutHandler(state) {
            state.showCheckout = false;
        }
    }
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;