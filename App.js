import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigatior from './app/navigation/ListNavigatior'

const App = () => {
  return (
    <NavigationContainer>
      <ListNavigatior/>
    </NavigationContainer>

  );
};

export default App;