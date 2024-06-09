import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      const indexEl = state.items.findIndex(
        (contacts) => contacts.id === payload
      );
      state.items.splice(indexEl, 1);
    },
  },
});

export default contactsSlice.reducer;

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const { addContact, deleteContact } = contactsSlice.actions;
