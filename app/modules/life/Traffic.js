'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  WebView
} from 'react-native';
import NavBar from '../../component/navBar'
class Traffic extends Component {
  _back() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={{flex:1}}>
            <NavBar style={styles.nav} title={' '} isShowLeftButton={1} leftFun={()=>this._back()}/>
            <View style={styles.content}>
              <WebView  style={{
                backgroundColor: '#fff',
              }}
              source={{uri:'http://m.cheshouye.com/api/weizhang/'}}
              automaticallyAdjustContentInset={false}
              contentInset={{top:0,left:10,bottom:20,right:10}}
              showsHorizontalScrollIndicator ={false}
              showsVerticalScrollIndicator ={false}
              startInLoadingState={true}
              // android
              domStorageEnabled={true}
              javaScriptEnabled={true}
              //ios
              bounces={true}
              allowsInlineMediaPlayback={true}
              scrollEnabled={true}
              decelerationRate="normal"

              />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,

  }
});


export default Traffic;