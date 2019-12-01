import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const Login = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Login Page</Text>
      <Button title="Go to Login 1" onPress={() => navigate('Login1')} />
      <Button title="Go to Login 2" onPress={() => navigate('Login2')} />
    </SafeAreaView>
  );
};

export default Login;
