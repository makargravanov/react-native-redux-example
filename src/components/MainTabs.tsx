import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from './UserScreen';
import WeatherScreen from './WeatherScreen';
import LogoutButton from './LogoutButton';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 15,
                    height: 70
                },
                tabBarActiveTintColor: '#3b5998',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{ tabBarLabel: 'Профиль' }}
            />
            <Tab.Screen
                name="Weather"
                component={WeatherScreen}
                options={{ tabBarLabel: 'Погода' }}
            />
            <Tab.Screen
                name="Logout"
                component={() => null}
                options={{
                    tabBarLabel: 'Выход',
                    tabBarButton: (props) => (
                        <LogoutButton {...props} onPress={handleLogout} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabs;
