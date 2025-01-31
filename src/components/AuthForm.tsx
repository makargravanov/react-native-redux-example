import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type AuthFormProps = {
    onLoginPress: (email: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
    headerStyle?: StyleProp<TextStyle>;
};

const AuthForm: React.FC<AuthFormProps> = ({
                                               onLoginPress,
                                               containerStyle,
                                               headerStyle
                                           }) => {
    const [email, setEmail] = React.useState('');

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Ошибка', 'Пожалуйста, введите корректный email');
            return;
        }
        onLoginPress(email);
    };

    return (
        <View style={[styles.formContainer, containerStyle]}>
            <Text style={[styles.textHeader, headerStyle]}>Авторизация</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Введите e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={handleLogin}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.buttonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.buttonText}>Войти</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        rowGap: 50,
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 35,
        marginTop: 200,
        fontFamily: 'JetBrainsMono-Regular',
    },
    input: {
        width: 250,
        height: 40,
        borderColor: '#3b5998',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        fontFamily: 'JetBrainsMono-Regular',
    },
    buttonGradient: {
        borderRadius: 25,
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'JetBrainsMono-Regular',
        color: 'white',
        fontSize: 16,
    },
});

export default AuthForm;
