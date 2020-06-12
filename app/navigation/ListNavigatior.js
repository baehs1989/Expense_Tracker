import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListDetailScreen from '../screens/ListDetailScreen';
import routes from './routes'

const Stack = createStackNavigator()

const ListNavigatior = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name={routes.LISTING} 
            component={ListingsScreen} 
            options={{headerShown:false}}
        />
        <Stack.Screen 
            name={routes.LISTING_DETAIL} 
            component={ListDetailScreen}  
            options = {(routes) => ({title:'Test'})}    
        />
    </Stack.Navigator>
)

export default ListNavigatior;