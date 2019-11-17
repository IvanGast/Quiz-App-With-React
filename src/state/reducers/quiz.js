import { GET_QUIZ, GET_QUIZ_ERROR, GET_QUIZ_SUCCESS } from 'state/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  quiz: null,
};

export default function quizReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_QUIZ:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quiz: action.quiz,
      };
    case GET_QUIZ_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
