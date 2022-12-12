import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleError,
    [addContact.rejected]: handleError,
    [deleteContact.rejected]: handleError,

    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;