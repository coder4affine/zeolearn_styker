import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Text = ({variant, style, ...props}) => {
  return (
    <RNText
      style={[styles[variant], style]}
      {...props}
      allowFontScaling={false}
    />
  );
};

export default Text;
