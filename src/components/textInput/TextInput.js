import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const TextInput = ({ style, forwardRed, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input ref={forwardRed} style={{ ...styles.container, ...style }} {...props} />;
};

TextInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
  forwardRed: PropTypes.func.isRequired,
};

export default TextInput;
