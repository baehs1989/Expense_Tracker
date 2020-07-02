import * as SecureStore from 'expo-secure-store';

const key = "authUser"
const storeUser = async (user) => {
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(user));
    } catch (error) {
        console.log('Error storing the User', error)
    }
}

const getUser = async() =>{
    try {
        return JSON.parse(await SecureStore.getItemAsync(key))
    } catch (error) {
        console.log('Error getting the User', error);
    }
}

const removeUser = async() => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error removing the User", error);
    }
}

export default {
    storeUser, 
    removeUser,
    getUser
}