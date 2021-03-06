import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListDetailScreen from '../screens/ListDetailScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import MemberListScreen from '../screens/MemberListScreen';
import WishListScreen from '../screens/WishListScreen';
import ArchiveListScreen from '../screens/ArchiveListScreen'
import ListSettingScreen from '../screens/ListSettingScreen'

import routes from './routes'

const Stack = createStackNavigator()

const ListNavigatior = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name={routes.LISTING} 
            component={ListingsScreen} 
            options={{headerShown:false, title:""}}
        />
        <Stack.Screen 
            name={routes.LISTING_DETAIL} 
            component={ListDetailScreen}  
            options = {(routes) => {return {title:routes.route.params.title}}}    
        />
        <Stack.Screen 
            name={routes.SHOPPING_LIST} 
            component={ShoppingListScreen}  
            options = {(routes) => ({title:'Shopping List'})}    
        />
        <Stack.Screen 
            name={routes.MEMBER_LIST} 
            component={MemberListScreen}  
            options = {(routes) => ({title:'Member List'})}    
        />
        <Stack.Screen 
            name={routes.WISH_LIST} 
            component={WishListScreen}  
            options = {(routes) => ({title:'Wish List'})}    
        />
        <Stack.Screen 
            name={routes.ARCHIVE} 
            component={ArchiveListScreen}  
            options = {(routes) => ({title:'Archive'})}    
        />        
        <Stack.Screen 
            name={routes.LIST_SETTING} 
            component={ListSettingScreen}  
            options = {(routes) => ({title:'Setting'})}    
        />       
    </Stack.Navigator>
)

export default ListNavigatior;