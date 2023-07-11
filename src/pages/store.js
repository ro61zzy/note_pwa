import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/profile";

export const store = configureStore({
    //inside here is where you configure reducers
    // a reducer takes in action, and prev state of app
    reducer: {
        user: userSlice.reducer
    }
})