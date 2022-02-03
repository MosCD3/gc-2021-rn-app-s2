import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpPage from '../screens/SignUp';
import FlexBoxTry from '../components/FlexBoxTry';
import LoginPage from '../screens/LoginPage';

const Stack = createNativeStackNavigator();

const LnadingPageMain = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topBox}>
        <Image
          source={{
            width: 250,
            height: 250,
            uri: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg',
          }}
        />
        <Text>Welcome to GCApp</Text>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('SignUp');
            }}>
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('Login');
            }}>
            <Text style={styles.buttonFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 40,
  },
  topBox: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 2,
    justifyContent: 'flex-end',
    padding: 30,
  },
  navButtonsWrapper: {
    height: 100,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    marginBottom: 2,
  },
  buttonFont: {
    color: 'white',
  },
});

export default LnadingPageMain;
