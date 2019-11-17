import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';

import { QUESTION_TYPE } from 'state/constants';
import CheckAnswer from 'components/CheckAnswer';
import RadioAnswer from 'components/RadioAnswer';
import TextAnswer from 'components/TextAnswer';

import './question.scss';

const answerComponentMap = {
  [QUESTION_TYPE.SHORT]: TextAnswer,
  [QUESTION_TYPE.LONG]: props => <TextAnswer multiLine {...props} />,
  [QUESTION_TYPE.RADIO]: RadioAnswer,
  [QUESTION_TYPE.CHECK]: CheckAnswer,
};

function Question({ data, onChange }) {
  const { text, answers, type } = data;

  const AnswerComponent = answerComponentMap[type];

  if (!AnswerComponent) {
    return null;
  }

  return (
    <div className="question">
      <Typography variant="body2" color="inherit">
        {text}
      </Typography>
      <AnswerComponent onChange={onChange} answers={answers} />
    </div>
  );
}

Question.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
      }),
    ),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Question;
