import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useWhenFinished } from 'common/hooks';
import { postFeedback } from 'state/actions/feedback';
import {
  selectFeedbackLoadingStatus,
  selectFeedbackError,
} from 'state/selectors/feedback';
import { selectQuiz } from 'state/selectors/quiz';
import Header from 'components/Header';
import QuizForm from 'components/QuizForm';

export default function QuizPage({ history }) {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const isLoading = useSelector(selectFeedbackLoadingStatus);
  const error = useSelector(selectFeedbackError);

  useWhenFinished(() => history.push('/'), { isLoading, error });

  if (!quiz) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Header text={quiz.title} />
      <QuizForm
        isLoading={isLoading}
        error={error}
        quiz={quiz}
        onSubmit={feedback => dispatch(postFeedback(feedback))}
      />
    </Fragment>
  );
}

QuizPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
