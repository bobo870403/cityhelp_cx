'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
  Dimensions,
  SegmentedControlIOS,
  Text,
  TextInput,
	WebView
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

var WEBVIEW_REF = 'webview';
class car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
    this._onChange = this._onChange.bind(this);
		this.onNavigationStateChange=this.onNavigationStateChange.bind(this);
  }
  _onChange(event) {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  }
  _back() {
		if(this.state.canGoBack)this.refs[WEBVIEW_REF].goBack();
    this.props.navigator.pop();

  }
	onNavigationStateChange(navState){
		this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
	}
	goBack() {
		this.refs[WEBVIEW_REF].goBack();
	}
	render() {
		let _js=`
		$('.nav-final').hide();
		$('.download').hide();
		$('.fn-mt').hide();
		$('.w-nav-mini').hide();

		window.onload=function(){
			$('.nav-final').hide();
			$('.download').hide();
			$('.fn-mt').hide();
			$('.w-nav-mini').hide();
		}`
		return (
      <View style={styles.container}>
			 	<NavBar style={styles.nav} title={' '} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<WebView  style={{
					backgroundColor:'#eee',
					width:width,
				}}
				ref={WEBVIEW_REF}
				source={{uri:'http://m.autohome.com.cn/loancar.html?modelid=25898#pvareaid=2028103'}}
				onNavigationStateChange={this.onNavigationStateChange}
				// android
				domStorageEnabled={true}
				javaScriptEnabled={true}
				//ios
				bounces={true}
				allowsInlineMediaPlayback={true}
				scrollEnabled={true}
				decelerationRate="normal"
				scalesPageToFit={true}
				injectedJavaScript={_js}
				startInLoadingState={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f0f0'
    backgroundColor: '#fff'
  },
  segmentedControl: {
    flex: 1.5,
    justifyContent: 'center',
    // marginTop: pxToDp(22),
    paddingLeft: pxToDp(25),
    paddingRight: pxToDp(25),
    backgroundColor: '#fff'
  },
});


export default car;
