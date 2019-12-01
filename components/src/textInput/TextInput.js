import React from 'react';
import {TextInput as RNTextInput, View} from 'react-native';
import Text from '../text/Text';

const TextInput = ({label}) => {
  return (
    <View>
      <Text variant="label">{label}</Text>
      <RNTextInput
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#6d55c0',
          backgroundColor: '#f4f2fb',
          padding: 10,
        }}
      />
    </View>
  );
};

export default TextInput;
