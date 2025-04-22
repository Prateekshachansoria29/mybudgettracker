import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createTable } from './src/database/database';

const App = () => {
  useEffect(() => {
    createTable(); // Create the table when the app starts
  }, []);

  return (
    <View>
      <Text>Welcome to Budget Tracker!</Text>
    </View>
  );
};

export default App;
