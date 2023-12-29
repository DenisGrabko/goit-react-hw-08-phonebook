export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = [payload, ...state.contactItems];
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = state.contactItems.filter(({ id }) => id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
