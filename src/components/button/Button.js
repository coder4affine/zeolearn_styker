/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({ children, ...props }) => {
  return (
    <button style={styles.container} type="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
