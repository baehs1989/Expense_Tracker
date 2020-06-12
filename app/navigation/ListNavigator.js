import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListDetailScreen from '../screens/ListDetailScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';

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
        <Stack.Screen 
            name={routes.SHOPPING_LIST} 
            component={ShoppingListScreen}  
            options = {(routes) => ({title:'Shopping List'})}    
        />
    </Stack.Navigator>
)

export default ListNavigatior;