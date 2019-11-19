import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

const Header = ({ title }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
