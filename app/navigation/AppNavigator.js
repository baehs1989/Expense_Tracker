import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'

import AppText from '../components/AppText'
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import routes from '../navigation/routes'
import ListNavigator from '../navigation/ListNavigator'
import MessageNavigator from '../navigation/MessageNavigator'
import BadgeIcon from '../components/Badge/BadgeIcon'

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name={routes.LIST_NAVIGATOR} 
            component={ListNavigator}
            options={{
                tabBarIcon: ({size, color}) => <FontAwesome name="th-list" color={color} size={size}/>,
            }}
        />

        <Tab.Screen 
            name={routes.MESSAGE_NAVIGATOR} 
            component={MessageNavigator}
            options={{
                tabBarIcon: ({size, color}) => <BadgeIcon color={color} size={size}/>,
                tabBarLabel: 'Invoices',
            }}
        />

        <Tab.Screen 
            name={routes.ACCOUNT} 
            component={AccountScreen}
            options={{
                tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="settings" color={color} size={size}/>
            }}
        />

    </Tab.Navigator>
)

export default AppNavigator