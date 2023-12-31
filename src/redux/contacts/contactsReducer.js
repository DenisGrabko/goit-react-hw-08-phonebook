import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './contactsOperations';
import {
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from './contactsFunctionsReducer';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const getActions = type =>
  isAnyOf(
    addContactsThunk[type],
    deleteContactsThunk[type],
    getContactsThunk[type]
  );

const initialState = { contactItems: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contactItems = [...payload, ...state.contactItems];
      })
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
