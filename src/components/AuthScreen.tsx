import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from './AuthForm.tsx';
import { useDispatch } from 'react-redux';
import { setUserEmail } from '../store/userSlice.ts';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
};

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const AuthScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<AuthScreenNavigationProp>();

    const handleLogin = (email: string) => {
        dispatch(setUserEmail(email));
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <AuthForm onLoginPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default AuthScreen;
