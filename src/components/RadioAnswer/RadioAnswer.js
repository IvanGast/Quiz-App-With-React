import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio/Radio';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';

import './radioAnswer.scss';

function RadioAnswer({ answers, onChange }) {
  const [value, setValue] = useState('');

  return (
    <div className="radio-answer">
      <RadioGroup
        aria-label="Answers"
        className="radio-group"
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          onChange(value);
        }}
      >
        {answers &&
          answers.map(a => (
            <FormControlLabel
              key={a.id}
              value={a.id.toString()}
              control={<Radio />}
              label={a.text}
            />
          ))}
      </RadioGroup>
    </div>
  );
}

RadioAnswer.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioAnswer;
