import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PageHeader from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeTab = () => {
  const {midWrapper} = styles;
  return (
    <View style={midWrapper}>
      <PageHeader>
        <Text style={styles.textStyle}>This is the home Tab</Text>
        <AntDesign name="plussquareo" size={24} color="white" />
      </PageHeader>
      <Text>Am home tab</Text>
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
