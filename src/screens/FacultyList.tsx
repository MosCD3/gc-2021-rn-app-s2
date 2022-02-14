import React from 'react';
import {Button, Text, View} from 'react-native';

class FacultyListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('faculty started');
    this.setState({count: 10});
  }

  componentWillUnmount() {
    //add some cleaning here
    console.log('Faculty page disappeared');
  }
  render(): React.ReactNode {
    return (
      <View>
        <Text>count: {this.state.count} times</Text>
        <Button
          title="Increase Count"
          onPress={() => this.setState({count: this.state.count + 1})}>
          Click
        </Button>
      </View>
    );
  }
}

export default FacultyListPage;
