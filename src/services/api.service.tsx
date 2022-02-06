import {sleep} from '../helpers';
import auth from '@react-native-firebase/auth';

const USERNAME = 'Moos';
const PASS = '123';

export async function signUp(username, password, callback) {
  //after 5 secounds
  await sleep(2000);
  if (username === USERNAME && password === PASS) {
    callback('SUCCESS');
  } else {
    callback('Login failed!');
  }
}

export function signUpUser(username, password): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export function signInAsync(username, password) {
  return auth().signInWithEmailAndPassword(username, password);
}
