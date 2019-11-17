import { createSelector } from 'reselect';

export const selectQuizLoadingStatus = createSelector(
  state => state.quiz.isLoading,
  isLoading => isLoading,
);

export const selectQuiz = createSelector(
  state => state.quiz.quiz,
  quiz => quiz,
);

export const selectQuizError = createSelector(
  state => state.quiz.error,
  error => error,
);
