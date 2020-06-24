import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MessageScreen from '../screens/MessageScreen';
import MessageDetailScreen from '../screens/MessageDetailScreen';

import routes from './routes'

const Stack = createStackNavigator()

const MessageNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name={routes.MEMBER_LIST} 
            component={MessageScreen} 
            options={{
                headerShown:false,
                title:''
            }}
        />
        <Stack.Screen 
            name={routes.MESSAGE_DETAILS} 
            component={MessageDetailScreen}  
            options = {(routes) => ({title:'Test'})}    
        />
    </Stack.Navigator>
)

export default MessageNavigator;