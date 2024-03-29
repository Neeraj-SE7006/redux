import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/Counterslice";
import authReducer from "../reducers/Authslice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    //if more reducer then add here with comma sapartor
  },
});
export default store;
