import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserScreen = () => {
    const userEmail = useSelector((state: RootState) => state.user.email);

    return (
        <View style={styles.container}>
            <Text style={styles.email}>Email пользователя: {userEmail}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        fontSize: 20,
    },
});

export default UserScreen;
