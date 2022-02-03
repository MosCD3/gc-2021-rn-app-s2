import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LnadingPageMain from './src/navigation/LandingPage';
import SignUpPage from './src/screens/SignUp';
import LoginPage from './src/screens/LoginPage';
import AfterLoginPage from './src/navigation/AfterLoginPage';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MainStack = createNativeStackNavigator();

const App = () => {
  AntDesign.loadFont();
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
        }}>
        {/* Logged out pages */}
        <MainStack.Screen name="Landing" component={LnadingPageMain} />
        <MainStack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{
            title: 'Create Account',
          }}
        />
        <MainStack.Screen name="Login" component={LoginPage} />

        {/* Logged in pages */}
        <MainStack.Screen name="AfterLogin" component={AfterLoginPage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pageHeader: {
    flex: 1,
  },
  pageBody: {
    flex: 2,
  },
  pageFooter: {
    flex: 1,
  },
});

export default App;
