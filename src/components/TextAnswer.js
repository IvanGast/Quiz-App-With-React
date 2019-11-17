import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';

export default function TextAnswer({ multiLine, onChange }) {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Your Answer"
      margin="normal"
      fullWidth
      multiline={multiLine}
      value={value}
      onChange={({ target: { value } }) => {
        setValue(value);
        onChange(value);
      }}
      type="text"
    />
  );
}

TextAnswer.propTypes = {
  multiLine: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextAnswer.defaultProps = {
  multiLine: false,
};
