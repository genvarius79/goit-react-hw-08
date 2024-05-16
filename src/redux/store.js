import contactsReducer from "./contacts/slice.js";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
