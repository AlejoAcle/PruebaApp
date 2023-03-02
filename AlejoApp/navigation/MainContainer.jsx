import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from 'react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/IonIcons';

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';


//Screen names
const homeName= 'Home';
const detailsName= 'Details';
const settingsName= 'Settings';

const Tab = createBottomTabNavigator();



export default function MainContainer(){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )


}