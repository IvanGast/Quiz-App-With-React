import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useWhenFinished } from 'common/hooks';
import { getQuiz } from 'state/actions/quiz';
import { selectQuizLoadingStatus, selectQuizError } from 'state/selectors/quiz';

import Header from 'components/Header';
import QuizCodeForm from 'components/QuizCodeForm';

export default function HomePage({ history }) {
  const isLoading = useSelector(selectQuizLoadingStatus);
  const error = useSelector(selectQuizError);
  const dispatch = useDispatch();

  useWhenFinished(() => history.push('/quiz'), { isLoading, error });

  return (
    <Fragment>
      <Header />
      <QuizCodeForm
        isLoading={isLoading}
        error={error}
        onSubmit={code => dispatch(getQuiz(code))}
      />
    </Fragment>
  );
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
