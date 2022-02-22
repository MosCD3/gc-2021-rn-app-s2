import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const StudentsListPage = props => {
  const [count, setCount] = useState<number>(0);
  const [studentName, setStudentName] = useState('Undefined');

  //Lifecycle hook
  //Execute whnever the page re-renders
  //rarely use it
  useEffect(() => {
    console.log('page started');
  });

  //Invoked whenever the page first loads
  useEffect(() => {
    console.log('page started');

    //Invoked on page disappeared, component unmount
    return () => {
      console.log('students unmounted');
    };
  }, []);
  return (
    <View>
      <Text>count: {count} times</Text>
      <Text>name: {studentName}</Text>
      <Button
        title="Increase Count"
        onPress={() => {
          setCount(count + 1);
          setStudentName('Moos');
        }}>
        Click
      </Button>
    </View>
  );
};

export default StudentsListPage;
