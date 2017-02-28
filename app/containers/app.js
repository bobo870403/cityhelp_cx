'use strict';

import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Navigator,
  View
} from 'react-native';

import SplashScreen from '@remobile/react-native-splashscreen';
import Storage from '../util/storage';
import Global from '../component/Global';
import TabBarView from '../containers/TabBarView';
import Login from '../pages/login';
var {
  NativeAppEventEmitter
} = require('react-native');
var subscription = NativeAppEventEmitter.addListener(
  'ReceiveNotification',
  (notification) => console.log(notification)
);
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide(); //启动页面消失
    Global.storage = Storage;
  }
  componentWillUnmount() {
    subscription.remove();
  }
  render() {
    let component = (true) ? Login : TabBarView;
    return (
      <View style={{flex:1}}>
              <Navigator 
                  initialRoute = {{name: 'main',component: component}}
                  configureScene = {(route) => {
                      return Navigator.SceneConfigs.PushFromRight;
                    }
                  }
                  renderScene = {(route, navigator) => {
                      let Component = route.component;
                      return <Component route={route} navigator={navigator} {...route.passProps}/>
                  }}
              />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  pageView: {
    flex: 1,
  }
});

export default App;