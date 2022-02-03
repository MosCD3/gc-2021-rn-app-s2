import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlexBoxTry from './FlexBoxTry';
import WelcomePage from './WelcomePage';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextStyles from './TextStyles';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Flex Try"
        component={FlexBoxTry}
        options={{
          tabBarLabel: 'Flex',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Welcome" component={WelcomePage} />
    </Tab.Navigator>
  );
};

export default MyTabs;
