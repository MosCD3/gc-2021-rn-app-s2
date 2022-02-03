import React, {useState} from 'react';
import {signUp, signUpPr, signInAsync} from '../services/api.service';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {sleep} from '../helpers';

const LoginPage = ({route, navigation}) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [status, setStatus] = useState('');

  async function doLogin() {
    if (username.length <= 0) {
      Alert.alert('Please enter a username');
      return;
    }
    if (password.length <= 0) {
      Alert.alert('Please enter a password');
      return;
    }

    setStatus('Authenticating ..');
    // const callback = (message) => {
    //   if (message === "SUCCESS") {
    //     setStatus("Login success");
    //   } else {
    //     setStatus(message);
    //   }
    // };
    // signUp(username, password, callback);

    // signUpPr(username, password)
    //   .then((result) => {
    //     setStatus(result.msg);
    //   })
    //   .catch((result) => {
    //     setStatus(result.msg);
    //   });

    // setStatus("Authenticating .. Done");

    const result = await signInAsync(username, password);

    navigation.reset({
      index: 0,
      routes: [{name: 'AfterLogin'}],
    });
    return;
    if (result === 'SUCCESS') {
      setStatus('Login success');
      await sleep(2000);
      navigation.reset({
        index: 0,
        routes: [{name: 'AfterLogin'}],
      });
    } else {
      setStatus(result);
    }
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <View style={styles.inputBoxWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />
          <Text>{status}</Text>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            doLogin();
          }}>
          <Text style={styles.buttonFont}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 2,
    padding: 10,
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
  inputBoxWrapper: {
    width: '100%',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '100%',
    padding: 10,
  },
});

export default LoginPage;
