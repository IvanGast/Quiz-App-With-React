import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import Question from 'components/Question';
import './quizForm.scss';

function QuizForm(props) {
  const { isLoading, error, quiz, handleSubmit, setFieldValue } = props;

  return (
    <form className="quiz-form" noValidate onSubmit={handleSubmit}>
      {error && (
        <Typography className="description" variant="body2" color="error">
          {error}
        </Typography>
      )}
      <Typography className="description" variant="body2" color="inherit">
        {quiz.description}
      </Typography>
      {quiz.questions &&
        quiz.questions.map(q => (
          <Question
            key={q.id}
            data={q}
            onChange={value => setFieldValue(`question-${q.id}`, value)}
          />
        ))}
      <div className="control-section">
        <Button
          disabled={isLoading || !quiz.id}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          type="submit"
        >
          {isLoading ? 'Saving...' : 'Submit'}
        </Button>
        <Link to="/">
          <Button variant="contained" type="button">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
}

QuizForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  quiz: PropTypes.shape({
    id: PropTypes.string,
    code: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        type: PropTypes.string,
        answers: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
          }),
        ),
      }),
    ),
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: props => ({}),
  handleSubmit: (values, { props }) => {
    props.onSubmit({
      quizId: props.quiz.id,
      answers: values,
    });
  },
})(QuizForm);
