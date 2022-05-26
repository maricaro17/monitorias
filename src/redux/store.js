import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { modalReducer, uiReducer } from "./reducers/uiReducer";
import { loginReducer } from "./reducers/authReducer";
import { monitorReducer } from "./reducers/monitorReducer";

const reducers = combineReducers({
  auth: loginReducer,
  ui: uiReducer,
  modal:modalReducer,
  monitores: monitorReducer
});

const store = configureStore({
  reducer: reducers,
});
export default store;