/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Tester, TestHookStore} from 'cavy';
const testHookStore = new TestHookStore();
import React, {Component} from 'react';
import AppItems from './specs/AppSpec'
class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[AppItems]} store={testHookStore} waitTime={1000}>
        <App />
      </Tester>
    );
  }
}
AppRegistry.registerComponent(appName, () => AppWrapper);
