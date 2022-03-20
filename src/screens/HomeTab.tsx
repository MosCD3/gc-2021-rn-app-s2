import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import PageHeader from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppData} from '../providers/AppState';

const HomeTab = ({route, navigation}) => {
  const {activeUser} = useAppData();
  const {midWrapper} = styles;
  return (
    <View style={midWrapper}>
      <PageHeader>
        <Text style={styles.textStyle}>Welcome {activeUser.firstName}</Text>
        <AntDesign name="plussquareo" size={24} color="white" />
      </PageHeader>
      <Button
        onPress={() => {
          navigation.push('Faculty');
        }}
        title="Faculty"
      />
      <Button
        onPress={() => {
          navigation.push('Students');
        }}
        title="Students"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  midWrapper: {
    flex: 1,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default HomeTab;
