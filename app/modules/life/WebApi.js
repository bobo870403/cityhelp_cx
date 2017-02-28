'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	WebView,
	Dimensions
} from 'react-native';
import NavBar from '../../component/navBar'
const {
	height,
	width
} = Dimensions.get('window');
class WebApi extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={{flex:1}}>
            <NavBar style={styles.nav} title={' '} isShowLeftButton={1} leftFun={()=>this._back()}/>
            <View style={styles.content}>
              <WebView  style={{
								backgroundColor:'#eee',
								width:width,
              }}
              source={{uri:this.props.route.url}}

              // startInLoadingState={true}
              // android
              domStorageEnabled={true}
              javaScriptEnabled={true}
              //ios
              bounces={true}
              allowsInlineMediaPlayback={true}
              scrollEnabled={true}
              decelerationRate="normal"
							scalesPageToFit={true}

							injectedJavaScript={(this.props.route._js)?this.props.route._js:''}
              />
            </View>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	content:{
		flex:1,
	}
});


export default WebApi;
