'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image,
	TouchableOpacity,
	ScrollView,
	StatusBar
} from 'react-native';

import pxToDp from '../util/pxToDp'
import HTTPUtil from '../util/HTTPUtil'

import Icon from 'react-native-vector-icons/Ionicons';
import RoomLoad from './home/roomLoan'
import Swiper from 'react-native-swiper'
import EmergencyNotice from './home/EmergencyNotice'
import PreviewApproval from './home/previewApproval'
import Car from './home/car'
import BookingActivities from './home/bookingActivities'
import Vote from './home/vote'
import Toutiao from './home/toutiao'
import MyInfo from './my/myInfo'
import Global from '../component/Global'
import Detail from '../component/Detail'
import TianDiTu from './app/TianDiTu'
import ListContainer from './life/listContainer'
import Buttons from '../component/Buttons'
import Gov from './government';
const {
	height,
	width
} = Dimensions.get('window');


class home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datas: null,
			loaded: false,
			toutiaoData: null,
		}

	}
	componentWillMount() {
			this._getBannerData();
			this._getToutiao();
			this._queryWeather();
		}
		//查询天气
	_queryWeather() {
			// var url='http://m.weather.com.cn/data/101010100.html'
			// HTTPUtil.get(url).then((json) => {
			// 	//处理 请求success
			// 	if (json.success) {
			// 		console.log(json);
			// 	} else {
			// 		//处理自定义异常
			// 		console.warn('异常 ');
			// 		this.doException(json);
			// 	}
			// }, (json) => {
			// 	//TODO 处理请求fail
			// 	console.warn('网络失败1:',json);
			// })
		}
		//查询首页海报
	_getBannerData() {
		let url = Global.hostip + Global.getListUri;
		var formdata = new FormData();
		formdata.append('columnAlias', 'xwzt');
		formdata.append('pageNum', 1);
		formdata.append('pageSize', 4);
		HTTPUtil.post(url, formdata).then((json) => {
			//处理 请求success
			if (json.success) {
				this.setState({
					datas: json.data,
					loaded: true,
				})
			} else {
				//处理自定义异常
				console.warn('异常 ');
				this.doException(json);
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败:', json);
		})
	}
	_getToutiao() {
			let url = Global.hostip + Global.getListUri;
			var formdata = new FormData();
			formdata.append('columnAlias', 'xwzx');
			formdata.append('pageNum', 1);
			formdata.append('pageSize', 4);
			console.log(url)
			HTTPUtil.post(url, formdata).then((json) => {
				// console.log(json)
				//处理 请求success
				if (json.success) {
					this.setState({
						toutiaoData: json.data,
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
		// 房屋试算
	_gotoRoomLoan() {
			this.props.navigator.push({
				component: RoomLoad,
			})
		}
		//车贷试算
	_gotoCar() {
			this.props.navigator.push({
				component: Car,
			})
		}
		//应急通知
	_gotoEmergencyNotice() {
			this.props.navigator.push({
				component: EmergencyNotice,
			})
		}
		//预审批
	_gotopPreApproval() {
			this.props.navigator.push({
				component: PreviewApproval,
			})
		}
		//预约活动
	_gotoBookingActivties() {
		this.props.navigator.push({
			component: BookingActivities,
		})
	}
	_gotoVote() {
		this.props.navigator.push({
			component: Vote,
		})
	}
	_gotoTianDiTu() {
		this.props.navigator.push({
			component: TianDiTu,
		})
	}
	_gotoToutiao() {
		this.props.navigator.push({
			component: Toutiao,
		})
	}
	_gotoDetail(id) {
		this.props.navigator.push({
			component: Detail,
			id: id,
		})
	}
	_gotoListContaner(columnAlias, t) {
		this.props.navigator.push({
			component: ListContainer,
			columnAlias: columnAlias,
			title: t
		})
	}
	_gotoZWFW() {
			this.props.navigator.push({
				component: Gov,
			})
		}
		//跳转到用户信息
	_gotoUserInfo() {
		this.props.navigator.push({
			component: MyInfo,
		})
	}
	render() {
		if (!this.state.loaded) {
			return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
								<Image style={{width:width,height:pxToDp(300)}} source={require('../img/loadings.gif')}/>
							</View>)
		}
		return (
			<ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
			<StatusBar
		     backgroundColor="blue"
		     barStyle="light-content"
		   />
				<View style={styles.banner}>
        	<View style={{flexDirection:'row',backgroundColor:'transparent',alignItems:'center',marginTop:35,height:pxToDp(140)}}>
        			<View style={{position:'absolute',left:25,top:20}}>
								  <View style={{flexDirection:'row',justifyContent:'center'}}>
										<Image style={{width:pxToDp(30),height:pxToDp(30),resizeMode:'contain'}} source={require('../img/fine.png')}/>
										<Text style={{width:pxToDp(140),color:'#fff',fontSize:12}}>26~31℃</Text>
									</View>
									<View style={{flexDirection:'row',alignItems:'center',height:30,marginLeft:2}}>
										<Icon style={{height:30}} name="ios-pin-outline" size={18} color="#fff" style={{backgroundColor:'transparent'}}/>
										<Text style={{width:pxToDp(140),color:'#fff',fontSize:12,marginLeft:2}}>杭州</Text>
									</View>
							</View>
							<TouchableOpacity onPress={()=>this._gotoUserInfo()} style={{flex:1,alignItems:'center'}}>
									<Image style={{width:pxToDp(130),height:pxToDp(130),resizeMode:'contain'}} source={require('../img/head_portrait.png')}/>
							</TouchableOpacity>
         </View>
         <View style={{flexDirection:'row',position:'absolute',bottom:10}}>
				 		<View style={{flex:1,alignItems:'center'}}>
							<Image style={{width:pxToDp(80),height:pxToDp(80)}} source={require("../img/bike.png")}/>
							<Text style={{color:'white',marginTop:3,fontSize:12}}>骑行</Text>
						</View>
						<View style={{flex:1,alignItems:'center'}}>
							<Image style={{width:pxToDp(80),height:pxToDp(80)}} source={require("../img/WIFI.png")}/>
							<Text style={{color:'white',marginTop:3,fontSize:12}}>V点</Text>
						</View>
						<View style={{flex:1,alignItems:'center'}}>
							<Image style={{marginTop:pxToDp(10),width:pxToDp(70),height:pxToDp(70)}} source={require("../img/zhoubian.png")}/>
							<Text style={{color:'white',marginTop:3,fontSize:12}}>周边</Text>
						</View>
						<View style={{flex:1,alignItems:'center'}}>
							<Image style={{width:pxToDp(80),height:pxToDp(80)}} source={require("../img/yaoyiyao.png")}/>
							<Text style={{color:'white',marginTop:3,fontSize:12}}>摇一摇</Text>
						</View>
         </View>
				</View>
				<View style={styles.headNews}>
					<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
						<Image
						style={{width:pxToDp(145),height:pxToDp(145)}}
        				source={require('../img/toutiao.png')}/>
					</View>
					<TouchableOpacity onPress={()=>this._gotoToutiao()} style={{flex:3,justifyContent:'center',alignItems:'center'}}>
						<Text style={{fontSize:pxToDp(26),color:'#666'}}>{(this.state.toutiaoData)?this.state.toutiaoData[0].contentTitle:''} </Text>
						<Text style={{fontSize:pxToDp(26),marginTop:10,color:'#666'}}>{(this.state.toutiaoData)?this.state.toutiaoData[1].contentTitle:''}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.btnView}>
					<TouchableOpacity onPress={()=>this._gotoZWFW()} style={{flex:1,borderRightColor:'rgba(0,0,0,0.1)',borderRightWidth:1,justifyContent:'center',alignItems:'center'}}>
						<View style={{width:pxToDp(90),height:pxToDp(90),backgroundColor:'#fdbf3c',borderRadius:pxToDp(45),justifyContent:'center',alignItems:'center'}}>
							<Icon name="md-globe" size={30} color="#fff" style={{backgroundColor:'transparent'}}/>
						</View>
						<Text style={{color:'#666',marginTop:pxToDp(10),fontSize:12}}>政务</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={()=>this._gotoBookingActivties()} style={{flex:1,borderRightColor:'rgba(0,0,0,0.1)',borderRightWidth:1,justifyContent:'center',alignItems:'center'}}>
						<View style={{width:pxToDp(80),height:pxToDp(80),backgroundColor:'#a67c6a',borderRadius:pxToDp(45),justifyContent:'center',alignItems:'center'}}>
							<Icon name="ios-create" size={20} color="#fff" style={{backgroundColor:'transparent'}}/>
						</View>
						<Text style={{color:'#666',marginTop:pxToDp(10),fontSize:12}}>预约活动</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoVote()} style={{flex:1,borderRightColor:'rgba(0,0,0,0.1)',borderRightWidth:1,justifyContent:'center',alignItems:'center'}}>
						<View style={{width:pxToDp(90),height:pxToDp(90),backgroundColor:'#ff8c45',borderRadius:pxToDp(45),justifyContent:'center',alignItems:'center'}}>
							<Icon name="ios-hand" size={30} color="#fff" style={{backgroundColor:'transparent'}}/>
						</View>
						<Text style={{color:'#666',marginTop:pxToDp(10),fontSize:12}}>投票</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotopPreApproval()} style={{flex:1,borderRightColor:'rgba(0,0,0,0.1)',borderRightWidth:1,justifyContent:'center',alignItems:'center'}}>
						<View style={{width:pxToDp(80),height:pxToDp(80),backgroundColor:'#f6695e',borderRadius:pxToDp(45),justifyContent:'center',alignItems:'center'}}>
							<Icon name="md-list-box" size={20} color="#fff" style={{backgroundColor:'transparent'}}/>
						</View>
						<Text style={{color:'#666',marginTop:pxToDp(10),fontSize:12}}>预审批</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.tilte}>
					<View style={{width:pxToDp(6),height:pxToDp(23),backgroundColor:'#fd7e2d'}}></View>
					<Text style={{color:'#666',marginLeft:pxToDp(10)}}>分享交流</Text>
				</View>
				<View style={styles.imgList}>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('ms','美食')} text={'美食'} imguri={require('../img/lifeImg_02.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('qz','亲子')} text={'亲子'} imguri={require('../img/lifeImg_03.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('jjsh','居家')} text={'居家'} imguri={require('../img/lifeImg_04.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('jy','教育')} text={'教育'} imguri={require('../img/lifeImg_05.jpg')}/>
				</View>
				<View style={styles.tilte}>
					<View style={{width:pxToDp(6),height:pxToDp(23),backgroundColor:'#fd7e2d'}}></View>
					<Text style={{color:'#666',marginLeft:pxToDp(10)}}>同城活动</Text>
				</View>
				<View style={styles.imgList}>

					<Buttons type={0} _onPress={()=>this._gotoListContaner('tchd-dzyl','大众娱乐')} text={'大众娱乐'} imguri={require('../img/lifeImg_07.jpg')}/>

					<Buttons type={0} _onPress={()=>this._gotoListContaner('ms','运动赛事')} text={'运动赛事'} imguri={require('../img/lifeImg_08.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('ms','登山旅游')} text={'登山旅游'} imguri={require('../img/lifeImg_09.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('ms','以舞会友')} text={'以舞会友'} imguri={require('../img/lifeImg_10.jpg')}/>
				</View>
				<View style={styles.tilte}>
					<View style={{width:pxToDp(6),height:pxToDp(23),backgroundColor:'#fd7e2d'}}></View>
					<Text style={{color:'#666',marginLeft:pxToDp(10)}}>人文生态</Text>
				</View>
				<View style={styles.imgList}>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('rwst_whcy','文化产业')} text={'文化产业'} imguri={require('../img/lifeImg_12.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('rwst_gjby','古今榜样')} text={'古今榜样'} imguri={require('../img/lifeImg_13.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('rwst_lsgj','历史古迹')} text={'历史古迹'} imguri={require('../img/lifeImg_14.jpg')}/>
					<Buttons type={0} _onPress={()=>this._gotoListContaner('rwst_msgy','民俗工艺')} text={'民俗工艺'} imguri={require('../img/lifeImg_15.jpg')}/>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		// marginBottom:pxToDp(50)
		// paddingBottom: pxToDp(250)
	},
	banner: {
		height: pxToDp(388),
		width: width,
		backgroundColor: '#fd7e2d'
	},
	bannerImg: {
		position: 'absolute',
		width: width,
		height: pxToDp(438)
	},
	headNews: {
		height: pxToDp(169),
		width: width,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		flexDirection: 'row'
	},
	luckyView: {
		height: pxToDp(300),
		width: width,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		marginTop: pxToDp(13),
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.1)',
		flexDirection: 'row'
	},
	btnView: {
		height: pxToDp(188),
		width: width,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		marginTop: pxToDp(13),
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.1)',
		flexDirection: 'row'
	},
	likebtnView: {
		height: pxToDp(188),
		width: width,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		// marginTop: pxToDp(1),
		// borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.1)',
		flexDirection: 'row'
	},
	likeView: {
		height: pxToDp(70),
		width: width,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		marginTop: pxToDp(13),
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.1)',
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: pxToDp(20),
		paddingLeft: pxToDp(20)
	},
	tilte: {
		flexDirection: 'row',
		marginTop: pxToDp(40)
	},
	imgList: {
		marginTop: pxToDp(20),
		flexDirection: 'row',
	},
	img: {
		width: pxToDp(187),
		height: pxToDp(187),
		resizeMode: Image.resizeMode.contain,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	imgText: {
		backgroundColor: 'transparent',
		color: '#fff',
		fontSize: pxToDp(30),
		marginBottom: pxToDp(10),
	}
});


export default home;