/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ff00"
  }
});
//let Main = require("./App/Components/Main");
import Main from './App/Components/Main';

class githubNoteTaker extends Component {
  render() {
  return (
    <NavigatorIOS style={styles.container}
      initialRoute={{
        component: Main,
        title: 'Github Notetaker',
        passProps: { myProp: 'foo' },
      }}/>
  );
}
};


AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);
