import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import PageHeader from '../components/Header';
import {useAppData} from '../providers/AppState';

const ProfileTab = props => {
  const {navigation} = props;
  const {activeUser} = useAppData();

  const signOut = () => {
    Alert.alert('Attention!', 'Are you sure to sign out?', [
      {
        text: 'Yes',
        onPress: () => {
          console.log('User accepted');
          navigation.reset({
            index: 0,
            routes: [{name: 'Landing'}],
          });
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('User rejected');
        },
      },
    ]);
  };
  return (
    <View style={styles.mainWrapper}>
      <PageHeader />

      <View style={styles.midWrapper}>
        <Text>Are you sure {activeUser.firstName} you want to logout?</Text>
        <Button
          title="Log out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  midWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProfileTab;
