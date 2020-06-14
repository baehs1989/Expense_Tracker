import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import MemberListScreen from './app/screens/MemberListScreen'

const App = () => {
  return (
    <NavigationContainer>
      <ListNavigator/>
    </NavigationContainer>
    // <MemberListScreen/>
  );
};

export default App;