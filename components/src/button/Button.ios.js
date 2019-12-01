/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableHighlight, Button as RNButton} from 'react-native';
import Text from '../text/Text';

const Button = ({title, style, ...props}) => {
  return (
    <TouchableHighlight {...props}>
      <View
        style={[
          {
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <Text variant="buttonText">{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
