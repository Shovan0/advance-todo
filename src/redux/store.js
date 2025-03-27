import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";
import weatherReducer from "./weatherSlice"; // ✅ Import weatherSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer, // ✅ Ensure weather reducer is included
  },
});

export default store;
