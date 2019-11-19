import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../context/localeContext';
import styles from './style';

const Header = ({ title }) => {
  console.log('Header');
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      <LocaleConsumer>
        {value => {
          console.log('value');
          return (
            <div>
              <h1>{value.locale}</h1>
              <button type="button" onClick={() => value.changeLocale('german')}>
                Change Locale
              </button>
            </div>
          );
        }}
      </LocaleConsumer>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
