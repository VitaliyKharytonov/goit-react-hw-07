import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const persistConfig = {
  key: "contactList",
  storage,
  whitelist: ["items"],
};
const persistedContactsReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer, filters: filtersSlice },
});

export const persistor = persistStore(store);
