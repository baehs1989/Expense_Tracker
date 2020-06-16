import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import ListSettingScreen from './app/screens/ListSettingScreen'
// import DeckSwiperExample from './app/components/DeckSwiperExample'

const App = () => {
  return (
    <NavigationContainer>
      <ListNavigator/>
    </NavigationContainer>
    // <ListSettingScreen/>
  );
};

export default App;