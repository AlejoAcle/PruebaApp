import * as React from 'react';
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
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route})} => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;
                
                if(rn  === homeName){
                    iconName = focused ? '' : 'home-outline';
                } else if (rn === detailsName){
                    iconName = focused ? 'list' : 'list-outline' ;
                } else if (rn === settingsName){
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                return <IonIcons name={iconName} size={size} color={color}/>

            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle:{ paddingBottom:10, fontSize:10 },
            style: {padding: 10, height:70}
        }}    
    >

        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={detailsName} component={DetailsScreen}/>
        <Tab.Screen name={settingsName} component={SettingsScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    )


}

//falta el home screen 