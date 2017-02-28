'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	WebView,
	Text,
	TouchableOpacity
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class voteSurvey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			against: 1,
			oppose: 1,
		};
	}
	_back() {
		this.props.navigator.pop();
	}
	_against() {
		this.setState({
			against: this.state.against + 0.1,
			oppose: this.state.oppose - 0.1
		})
	}
	_oppose() {
		this.setState({
			against: this.state.against - 0.1,
			oppose: this.state.oppose + 0.1
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'调查投票详情页'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.head}>
					<Text style={{fontSize:pxToDp(34)}}>你回去办安检证吗？</Text>
					<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:pxToDp(30)}}>
						<TouchableOpacity onPress={()=>this._against()}>
							<Icon name="md-thumbs-up" size={30} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
						</TouchableOpacity>
						
						<Text style={{marginLeft:5}}>会(132)</Text>
						<View style={{width:pxToDp(278),height:pxToDp(43),flexDirection:'row',marginLeft:5}}>
							<View style={{backgroundColor:'#fd7e2d',flex:this.state.against}}></View>
							<View style={{backgroundColor:'#eee',flex:this.state.oppose}}></View>
						</View>
						<Text style={{marginLeft:5}}>不会(324)</Text>
						<TouchableOpacity onPress={()=>this._oppose()}>
							<Icon name="md-thumbs-down" size={30} color="#fd7e2d" style={{marginLeft:5,backgroundColor:'transparent'}}/>
						</TouchableOpacity>
					</View>
				</View>
				<WebView
					automaticallyAdjustContentInsets={false}
					style={styles.webView}
					source={{uri: 'http://m.toutiao.com/a6318090471457554689/'}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					onNavigationStateChange={this.onNavigationStateChange}
					onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
					startInLoadingState={true}
					scalesPageToFit={true}
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
	webView: {
		flex: 1,
		width: width,
	},
	btn: {
		backgroundColor: '#fd7e2d',
		height: pxToDp(90),
		justifyContent: 'center',
		alignItems: 'center',
	},
	head: {
		paddingTop: pxToDp(25),
		paddingBottom: pxToDp(25),
		justifyContent: 'center',
		alignItems: 'center',
	}
});


export default voteSurvey;