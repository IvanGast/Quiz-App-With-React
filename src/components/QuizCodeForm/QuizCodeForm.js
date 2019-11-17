import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';

import './quizCodeForm.scss';

function QuizCodeForm(props) {
  const {
    isLoading,
    errors,
    error,
    handleSubmit,
    handleChange,
    isValid,
  } = props;

  return (
    <form className="quiz-code-form" noValidate onSubmit={handleSubmit}>
      <div className="quiz-code">
        <TextField
          error={!!error || !!errors.code}
          label={error || errors.code || 'Quiz Code'}
          margin="normal"
          name="code"
          onChange={handleChange}
          required
        />
      </div>
      <Button
        disabled={!isValid}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
      >
        {isLoading ? 'Loading...' : 'Start'}
      </Button>
    </form>
  );
}

QuizCodeForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  isValid: PropTypes.bool,
  errors: PropTypes.shape({
    code: PropTypes.string,
  }),
};

QuizCodeForm.defaultProps = {
  error: null,
};

export default withFormik({
  validationSchema: Yup.object().shape({
    code: Yup.string()
      .min(3, 'Quiz code is too short')
      .required('Quiz code is required'),
  }),
  mapPropsToValues: props => ({
    code: '',
  }),
  handleSubmit: (values, { props }) => {
    props.onSubmit(values.code);
  },
})(QuizCodeForm);
