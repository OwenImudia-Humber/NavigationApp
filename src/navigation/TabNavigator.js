import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = 'home';
        if (route.name === 'HomeTab') iconName = 'home';
        else if (route.name === 'Search') iconName = 'search';
        else if (route.name === 'Settings') iconName = 'settings';
        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
      tabBarActiveTintColor: '#3498db',
    })}
  >
    <Tab.Screen name="HomeTab" component={StackNavigator} options={{ title: 'Home' }} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default TabNavigator