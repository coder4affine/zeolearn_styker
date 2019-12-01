import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const Settings = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Settings Page</Text>
      <Button title="Go to Login" onPress={() => navigate('Login')} />
    </SafeAreaView>
  );
};

export default Settings;
