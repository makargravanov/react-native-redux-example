import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

type LogoutButtonProps = {
    onPress: () => void;
};

type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
};

type MainTabParamList = {
    User: undefined;
    Weather: undefined;
    Logout: undefined;
};

type LogoutButtonNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'Logout'>,
    StackNavigationProp<RootStackParamList>
>;

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
    const navigation = useNavigation<LogoutButtonNavigationProp>();

    const handlePress = () => {
        onPress();
        navigation.navigate('Auth');
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Выйти</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontSize: 16,
    },
});

export default LogoutButton;
