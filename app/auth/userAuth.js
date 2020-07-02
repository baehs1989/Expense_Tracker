

import {useContext} from 'react';

import AuthContext from './context';
import authStorage from './storage';

export default userAuth = () =>{
    const {user, setUser} = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        authStorage.removeUser();
    }

    const logIn = (user) =>{
        setUser(user)
        authStorage.storeUser(user);
    }

    return {user, logOut, logIn, setUser}
}