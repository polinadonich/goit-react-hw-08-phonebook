import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactsSuccsess,
  deleteContactsSuccsess,
  fetchContactsSuccsess,
  changeFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccsess]: (state, { payload }) => payload,
  [addContactsSuccsess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccsess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

const initialState = combineReducers({
  items,
  filter,
});

export default initialState;
