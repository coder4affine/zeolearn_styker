import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const { Provider: LocaleProvider, Consumer: LocaleConsumer } = createContext();

const localeContext = ({ children }) => {
  const [locale, setLocale] = useState('english');

  return (
    <LocaleProvider
      value={{
        locale,
        changeLocale: val => {
          setLocale(val);
        },
      }}
    >
      {children}
    </LocaleProvider>
  );
};

localeContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default localeContext;
