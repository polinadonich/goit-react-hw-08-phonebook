/* eslint-disable import/no-anonymous-default-export */
// import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import contacts from "./contacts/contacts-reducer";
import { authReducer } from "./auth";

console.log(authReducer);
console.log(contacts);

const myMiddleWare = (store) => (next) => (action) => {
  console.log("Моя прослойка", action);

  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleWare,
  logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contacts,
  },
  middleware,
  // указываем, что devtools нужны только при разработке
  devTools: process.env.NODE_ENV === "development",
});

console.log(store.getState());

export const persistor = persistStore(store);
