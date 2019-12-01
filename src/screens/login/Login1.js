import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const Login = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Login1 Page</Text>
      <Button title="Go to Dashboard" onPress={() => navigate('Dashboard')} />
    </SafeAreaView>
  );
};

export default Login;
