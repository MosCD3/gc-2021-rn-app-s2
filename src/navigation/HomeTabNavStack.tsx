import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FacultyListPage from '../screens/FacultyList';
import HomeTab from '../screens/HomeTab';
import StudentsListPage from '../screens/StudentsList';

const NavStack = createNativeStackNavigator();

const HomeTabNavStack = () => {
  return (
    <NavStack.Navigator initialRouteName="Landing">
      <NavStack.Screen
        name="Home"
        component={HomeTab}
        options={{
          title: 'Home',
        }}
      />
      <NavStack.Screen
        name="Faculty"
        component={FacultyListPage}
        options={{
          title: 'Faculty List',
        }}
      />
      <NavStack.Screen
        name="Students"
        component={StudentsListPage}
        options={{
          title: 'Students List',
        }}
      />
    </NavStack.Navigator>
  );
};

export default HomeTabNavStack;
