import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from './src/store/store';
import AuthScreen from './src/components/AuthScreen';
import MainTabs from './src/components/MainTabs';

const Stack = createStackNavigator();

const App = () => {
    const userEmail = useSelector((state: RootState) => state.user.email);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userEmail ? (
                    <Stack.Screen
                        name="Main"
                        component={MainTabs}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="Auth"
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
