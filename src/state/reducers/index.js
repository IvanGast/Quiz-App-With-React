import { combineReducers } from 'redux';

import feedback from 'state/reducers/feedback';
import quiz from 'state/reducers/quiz';

export default combineReducers({
  feedback,
  quiz,
});
