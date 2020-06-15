import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import ArchiveListScreen from './app/screens/ArchiveListScreen'
import DeckSwiperExample from './app/components/DeckSwiperExample'

const App = () => {
  return (
    // <NavigationContainer>
    //   <ListNavigator/>
    // </NavigationContainer>
    <DeckSwiperExample/>
  );
};

export default App;