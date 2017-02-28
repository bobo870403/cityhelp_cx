'use strict';
/*
投票内容详细
 */
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	WebView,
	TouchableHighlight,
	Text,
	ActivityIndicator
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
import HTTPUtil from '../../util/HTTPUtil'
import VoteList from './voteList'
import Global from '../../component/Global'

class voteDetail extends Component {
	constructor(){
		super()
		this.state={
			loaded:false,
			html:null,
		}
	}
	componentWillMount(){
		this._fetch();
	}

	_gotoResult() {
		this.props.navigator.push({
			component: VoteList,
			datas:this.state.datas
		})
	}
	_back() {
		this.props.navigator.pop();
	}
	_fetch(){
		let url = Global.hostip + Global.findVote;
		let formdata = {
			'id': (this.props.route.id)?this.props.route.id:'',
		}
		HTTPUtil.get(url, formdata).then((json) => {
			// console.log(json)
			//处理 请求success
			if (json.success) {
				this.setState({
					html:Global.HTML+json.data.voteDescription+'</body></html>',
					datas:json.data,
					loaded:true,
				})
			} else {
				//处理自定义异常
				console.warn('异常 ');
				this.doException(json);
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败', json);
		})
	}
	render() {
		if(!this.state.loaded){
			return (
				<View style={{marginTop:height/2-180,width:80,height:80,backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,justifyContent:'center',alignSelf:'center'}}>
							<ActivityIndicator
								style={{alignItems:'center'}}
								size="small"/>
							<Text style={{color:'#ffffff',fontSize:12,textAlign:'center',marginTop:5}}>正在加载... </Text>
			 </View>
			);
		}
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'投票详情'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<WebView
					automaticallyAdjustContentInsets={false}
					style={styles.webView}
					source={{html: this.state.html,baseUrl:'http://www.jianshu.com'}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					onNavigationStateChange={this.onNavigationStateChange}
					onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
					startInLoadingState={true}
					scalesPageToFit={true}
				/>
				<TouchableHighlight onPress={()=>this._gotoResult()} style={styles.btn}>
					<Text style={{color:'#fff',fontSize:pxToDp(40)}}>我要投票</Text>
				</TouchableHighlight>
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
	}
});


export default voteDetail;
