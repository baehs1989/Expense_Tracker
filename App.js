import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppLoading} from 'expo';

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'

import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

const App = () => {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user)
  }

  if (!isReady){
    return(
      <AppLoading startAsync={restoreUser} onFinish={()=>setIsReady(true)}/>
    )
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {user?<AppNavigator/>:<AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;