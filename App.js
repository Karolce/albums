import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
