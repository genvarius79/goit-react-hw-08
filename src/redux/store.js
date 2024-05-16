import contactsReducer from "./contactsSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
