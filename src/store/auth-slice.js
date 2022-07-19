import { createSlice } from "@reduxjs/toolkit";

const calculateRemainingTime = (expirationDate) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationDate).getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime,
    };
};

const authInitialState = {
    token: null,
    isLoggedIn: false,
    API_KEY: 'AIzaSyDA4GsuHNCgK9BAZTHRZSks_Mx6qcNocMQ',
};



const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        loginHandler(state, action) {
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logoutHandler(state) {
            state.token = null;
            state.isLoggedIn = false;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;