import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric'
                );
                setWeather(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={styles.city}>Город: {weather?.name}</Text>
                    <Text style={styles.temp}>Температура: {weather?.main?.temp}°C</Text>
                    <Text style={styles.description}>
                        Погода: {weather?.weather?.[0]?.description}
                    </Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        fontSize: 24,
        marginBottom: 10,
    },
    temp: {
        fontSize: 20,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
    },
});

export default WeatherScreen;
