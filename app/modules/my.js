'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import pxToDp from '../util/pxToDp'
import Icon from 'react-native-vector-icons/Ionicons';

import ParallaxView from 'react-native-parallax-view';
const {
	height,
	width
} = Dimensions.get('window');

import MyFlow from './my/myFlow';
import MyInfo from './my/myInfo';
import MyPromise from './my/myPromise';
import MyRss from './my/myRss';
import Setting from './my/setting';
import MyFavorites from './my/myFavorites';
import Login from './users/login.js'
import Global from '../component/Global'
class my extends Component {
	constructor(){
		super();
		this.state={
			user:null
		}
	}
	componentDidMount(){
		console.log(111);
		this._getLocalUserInfo();
	}
	componentWillReceiveProps(){

		this._getLocalUserInfo();
	}
	_getLocalUserInfo(){

		Global.storage.load({
			key: 'loginState',
			autoSync: false,
			syncInBackground: false
		}).then(ret => {
			// console.log(ret);
			this.setState({ user: ret });
		}).catch(err => {
			// console.warn(err.message);
			switch (err.name) {
					case 'NotFoundError':
						console.warn('NotFoundError');
						this.setState({ user: null });
							// TODO;
							break;
					case 'ExpiredError':
						console.warn('ExpiredError');
							// TODO
							break;
			}
		})
	}
	_gotoFlow() {
		this.props.navigator.push({
			component: MyFlow,
		})
	}
	_gotoInfo() {
		this.props.navigator.push({
			component: MyInfo,
		})
	}
	_gotoPromise() {
		this.props.navigator.push({
			component: MyPromise,
		})
	}
	_gotoRss() {
		this.props.navigator.push({
			component: MyRss,
		})
	}
	_gotoSet() {
		this.props.navigator.push({
			component: Setting,
		})
	}
	_gotoFav() {
		this.props.navigator.push({
			component: MyFavorites,
		})
	}
	_gotoLogin(){
		this.props.navigator.push({
			component: Login,
		})
	}
	_render() {
		if(!this.state.user){
			return(
				<View style={styles.head}>
								<TouchableOpacity onPress={()=>this._gotoSet()} style={{marginTop:pxToDp(50),paddingLeft:pxToDp(650),paddingRight:pxToDp(20)}}>
									<Text style={{color:'#fff',fontSize:pxToDp(35),backgroundColor:'transparent'}}>设置</Text>
								</TouchableOpacity>
								<View style={{flexDirection:'row',marginTop:pxToDp(40),marginLeft:pxToDp(40)}}>
									<View style={{marginLeft:pxToDp(20)}}>
										<View style={{backgroundColor:'#fff',width:pxToDp(145),height:pxToDp(145),borderRadius:pxToDp(72.5),justifyContent: 'center',alignItems: 'center',overflow:'hidden'}}>
											<Image style={{width:pxToDp(138),height:pxToDp(138)}} source={require('../img/user_default.png')}/>
										</View>
									</View>
									<TouchableOpacity onPress={()=>this._gotoLogin()} style={{flex:5,marginLeft:pxToDp(20)}}>
										<View style={{flex:1,flexDirection:'row',marginTop:pxToDp(5),alignItems: 'center',}}>
											<Text style={{color:'#fff',fontSize:pxToDp(30),backgroundColor:'transparent'}}>请点击登录</Text>
										</View>
									</TouchableOpacity>
								</View>
				</View>	)
		}else{
			return (<View style={styles.head}>
						 	<TouchableOpacity onPress={()=>this._gotoSet()} style={{flex:1,paddingLeft:pxToDp(650),paddingRight:pxToDp(20)}}><Text style={{color:'#fff',fontSize:pxToDp(35),backgroundColor:'transparent'}}>设置</Text></TouchableOpacity>
						 	<View style={{flex:1,flexDirection:'row'}}>
						 		<View style={{marginLeft:pxToDp(20)}}>
						 			<View style={{backgroundColor:'#fff',width:pxToDp(145),height:pxToDp(145),borderRadius:pxToDp(72.5),justifyContent: 'center',alignItems: 'center',}}>
						 				<Image style={{width:pxToDp(138),height:pxToDp(138)}} source={require('../img/usericon.png')}/>
						 			</View>
						 		</View>
						 		<TouchableOpacity onPress={()=>this._gotoInfo()} style={{flex:5,marginLeft:pxToDp(20)}}>
						 			<View style={{flex:1,flexDirection:'row',marginTop:pxToDp(5),alignItems: 'center',}}>
						 				<Text style={{color:'#fff',fontSize:pxToDp(40),backgroundColor:'transparent'}}>{(this.state.user)?this.state.user.userName:'这货竟然都没有名字'}</Text>
						 				<Image style={{width:pxToDp(38),height:pxToDp(38),marginLeft:pxToDp(5)}} source={require('../img/v1.png')}/>
						 				<Image style={{width:pxToDp(38),height:pxToDp(38),marginLeft:pxToDp(5)}} source={require('../img/v.png')}/>
						 			</View>
						 			<View style={{flex:1,flexDirection:'row',alignItems: 'center',marginTop:pxToDp(10)}}>
						 				<Icon name="ios-rainy-outline" size={30} color="#fff" style={{backgroundColor:'transparent'}}/>
						 				<Text style={{backgroundColor:'transparent',color:'#fff',marginLeft:pxToDp(5)}}>26-31℃</Text>
						 				<Image style={{width:pxToDp(38),height:pxToDp(38),marginLeft:pxToDp(20)}} source={require('../img/ci.png')}/>
						 				<Text style={{backgroundColor:'transparent',color:'#fff',marginLeft:pxToDp(5)}}>{(this.state.user.active)?'已激活验证':'待通过验证'}</Text>
						 			</View>
						 		</TouchableOpacity>
						 		<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
						 			<Icon name="ios-arrow-forward-outline" size={30} color="#fff" style={{backgroundColor:'transparent'}}/>
						 		</View>
						 	</View>
						 	<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
						 		<View style={{backgroundColor:'#fff',height:pxToDp(50),width:pxToDp(260),borderRadius:pxToDp(20),flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
						 			<Image style={{width:pxToDp(38),height:pxToDp(38),marginLeft:pxToDp(5)}} source={require('../img/vo.png')}/>
						 			<Text style={{backgroundColor:'transparent',color:'#666',marginLeft:pxToDp(5)}}>签到秒变高富帅</Text>
						 		</View>
						 	</View>
							</View>)
		}
	}

	render() {
		return (
			<ParallaxView
								ref={component => this._scrollView = component}
                backgroundSource={require('../img/my_head_bg.png')}
                windowHeight={200}
                header={this._render()}>

				<View style={styles.myBtnContainer}>
					<View style={styles.btnSing}>
						 <Icon name="md-star" size={30} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
						 <Text style={{backgroundColor:'transparent',color:'#666',marginLeft:pxToDp(5)}}>我的积分</Text>
					</View>
					<TouchableOpacity onPress={()=>this._gotoPromise()} style={styles.btnSing}>
						<Icon name="ios-create-outline" size={30} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
						 <Text style={{backgroundColor:'transparent',color:'#666',marginLeft:pxToDp(5)}}>我的预约</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRss()} style={styles.btnSing}>
						<Icon name="logo-rss" size={30} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
						 <Text style={{backgroundColor:'transparent',color:'#666',marginLeft:pxToDp(5)}}>我的订阅</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.list}>
					<TouchableOpacity onPress={()=>this._gotoFav()} style={styles.listBtn}>
						<Icon name="md-cube" size={35} color="#6699ff" style={{flex:1,backgroundColor:'transparent',marginLeft:pxToDp(70)}}/>
						 <Text style={{flex:6,backgroundColor:'transparent',color:'#666',fontSize:pxToDp(34)}}>我的收藏</Text>
						 <Icon name="ios-arrow-forward" size={30} color="rgba(0,0,0,0.3)" style={{flex:1,backgroundColor:'transparent'}}/>
					</TouchableOpacity>
					{/*<View style={styles.listBtn}>
						<Icon name="ios-bowtie" size={35} color="#fd7e2d" style={{flex:1,backgroundColor:'transparent',marginLeft:pxToDp(70)}}/>
						 <Text style={{flex:6,backgroundColor:'transparent',color:'#666',fontSize:pxToDp(34)}}>我的福利</Text>
						 <Icon name="ios-arrow-forward" size={30} color="rgba(0,0,0,0.3)" style={{flex:1,backgroundColor:'transparent'}}/>
					</View>*/}
					<TouchableOpacity onPress={()=>this._gotoFlow()} style={styles.listBtn}>
						<Icon name="md-pulse" size={35} color="#6699ff" style={{flex:1,backgroundColor:'transparent',marginLeft:pxToDp(70)}}/>
						 <Text style={{flex:6,backgroundColor:'transparent',color:'#666',fontSize:pxToDp(34)}}>我的流程</Text>
						 <Icon name="ios-arrow-forward" size={30} color="rgba(0,0,0,0.3)" style={{flex:1,backgroundColor:'transparent'}}/>
					</TouchableOpacity>
					<View style={styles.listBtn}>
						<Icon name="ios-mail-outline" size={35} color="#6699ff" style={{flex:1,backgroundColor:'transparent',marginLeft:pxToDp(70)}}/>
						 <Text style={{flex:6,backgroundColor:'transparent',color:'#666',fontSize:pxToDp(34)}}>我的消息</Text>
						 <Icon name="ios-arrow-forward" size={30} color="rgba(0,0,0,0.3)" style={{flex:1,backgroundColor:'transparent'}}/>
					</View>
					{/*<View style={styles.listBtn}>
						<Icon name="ios-heart" size={35} color="#fd7e2d" style={{flex:1,backgroundColor:'transparent',marginLeft:pxToDp(70)}}/>
						 <Text style={{flex:6,backgroundColor:'transparent',color:'#666',fontSize:pxToDp(34)}}>任务活动</Text>
						 <Icon name="ios-arrow-forward" size={30} color="rgba(0,0,0,0.3)" style={{flex:1,backgroundColor:'transparent'}}/>
					</View>*/}
					<View style={styles.listBtn}></View>

				</View>
			</ParallaxView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	head: {
		height: pxToDp(422),

	},
	myBtnContainer: {
		flexDirection: 'row'
	},
	list: {
		flex: 7,
		backgroundColor: 'rgba(0,0,0,0.1)',

	},
	btnSing: {
		flex: 1,
		borderRightColor: 'rgba(0,0,0,0.1)',
		borderRightWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: pxToDp(20),
		marginBottom: pxToDp(20)
	},
	listBtn: {
		height: pxToDp(120),
		backgroundColor: '#fff',
		marginTop: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	}
});


export default my;
