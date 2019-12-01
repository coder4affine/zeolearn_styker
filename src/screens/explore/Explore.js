import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const Explore = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Explore Page</Text>
      <Button title="Go to Login" onPress={() => navigate('MyModal')} />
    </SafeAreaView>
  );
};

export default Explore;
