import {
  POST_FEEDBACK,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_ERROR,
} from 'state/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
};

export default function feedbackReducer(state = initialState, action = {}) {
  switch (action.type) {
    case POST_FEEDBACK:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case POST_FEEDBACK_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
