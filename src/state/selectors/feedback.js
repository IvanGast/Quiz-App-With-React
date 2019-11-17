import { createSelector } from 'reselect';

export const selectFeedbackLoadingStatus = createSelector(
  state => state.feedback.isLoading,
  isLoading => isLoading,
);

export const selectFeedbackError = createSelector(
  state => state.feedback.error,
  error => error,
);
