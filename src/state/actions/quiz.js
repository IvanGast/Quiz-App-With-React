import { QUIZ_VIEW_URL } from 'state/constants';
import Api from 'common/api';
import { GET_QUIZ, GET_QUIZ_ERROR, GET_QUIZ_SUCCESS } from 'state/actionTypes';

export function getQuiz(code) {
  return async dispatch => {
    dispatch({ type: GET_QUIZ });

    try {
      const quiz = await Api.get(QUIZ_VIEW_URL(code));

      dispatch({
        type: GET_QUIZ_SUCCESS,
        quiz,
      });
    } catch (e) {
      const error = e && e.error ? e.error : 'System error';

      dispatch({
        type: GET_QUIZ_ERROR,
        error,
      });
    }
  };
}
