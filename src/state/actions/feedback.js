import {
  POST_FEEDBACK,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_ERROR,
} from 'state/actionTypes';
import { POST_FEEDBACK_URL } from 'state/constants';
import Api from 'common/api';

export function postFeedback(feedback) {
  return async dispatch => {
    dispatch({ type: POST_FEEDBACK });

    try {
      await Api.post(POST_FEEDBACK_URL, feedback);

      dispatch({
        type: POST_FEEDBACK_SUCCESS,
      });
    } catch (e) {
      const error = e && e.error ? e.error : 'System error';
      dispatch({
        type: POST_FEEDBACK_ERROR,
        error,
      });
    }
  };
}
