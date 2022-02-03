import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function TextStyles({children}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>{children}</Text>
      <AntDesign
        name={'phone'}
        size={200}
        color={'blue'}
        onPress={() => {
          console.log('am clicked');
        }}
      />
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Button title</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '700',
    color: 'blue',
  },
  buttonStyle: {
    backgroundColor: 'pink',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
});
export default TextStyles;
