import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import FormGroup from '@material-ui/core/FormGroup/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';

function CheckAnswer({ answers, onChange }) {
  const [values, setValues] = useState({});

  const handleChange = useCallback(
    ({ target: { value } }, isChecked) => {
      const { [value]: _, ...rest } = values;
      const newValues = isChecked ? { [value]: true, ...rest } : rest;

      setValues(newValues);
      onChange(Object.keys(newValues));
    },
    [onChange, values],
  );

  return (
    <FormGroup>
      {answers.map(a => (
        <FormControlLabel
          key={a.id}
          control={<Checkbox onChange={handleChange} value={a.text} />}
          label={a.text}
        />
      ))}
    </FormGroup>
  );
}

CheckAnswer.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckAnswer;
