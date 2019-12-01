import React from 'react';
import {Button, Text, SafeAreaView} from 'react-native';

const Dashboard = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <Text>Dashboard Page</Text>
      <Button title="Go to Login" onPress={() => navigate('MyModal')} />
    </SafeAreaView>
  );
};

export default Dashboard;
