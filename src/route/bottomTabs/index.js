import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useThemeColors from '../../hooks/useThemeColors';
import Colors from '../../utils/styles/colors';
import { Cart, Favorite, Home, Profile, Search } from '../../screen';
import MyTabBar from '../../components/routeComponents/tabComponents/myTabBar';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} initialRouteName='HomeScreen' screenOptions={{ headerShown: false, keyboardHidesTabBar: true,
            activeTintColor: '#a8d674', }} >
            <Tab.Screen name="HomeScreen" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),


                }} />
            <Tab.Screen name="CartScreen" component={Cart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="adduser" color={color} size={size} />
                    ),

                }} />
            <Tab.Screen name="SearchScreen" component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pluscircleo" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="FavoriteScreen" component={Favorite}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="hearto" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="ProfileScreen" component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>

    )
}