import React from 'react';
import {View, TouchableHighlight, Button as RNButton} from 'react-native';
import Text from '../text/Text';

const Button = ({title}) => {
  return (
    <View
      style={{
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Text variant="buttonText">{title}</Text>
    </View>
  );
};

export default Button;
