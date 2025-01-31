import { RouteProp } from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
};

export type MainTabParamList = {
    User: undefined;
    Weather: undefined;
    Logout: undefined;
};

export type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;
export type UserScreenRouteProp = RouteProp<MainTabParamList, 'User'>;
