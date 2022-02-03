import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUp';
import HomeTab from '../screens/HomeTab';
import ProfileTab from '../screens/ProfileTab';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator();

const AfterLoginPage = () => {
  return (
    <Tabs.Navigator screenOptions={{}}>
      <Tabs.Screen
        name="route-home"
        component={HomeTab}
        options={{
          title: 'Main',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-settings"
        component={ProfileTab}
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AfterLoginPage;
