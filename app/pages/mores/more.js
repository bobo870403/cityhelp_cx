'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	SegmentedControlIOS,
	TouchableOpacity
} from 'react-native';

import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Toast, {
	DURATION
} from 'react-native-easy-toast'
class more extends Component {
	constructor(props) {
		super(props);
	}
  _buttonRender(imgurl,textname){
		var button=<TouchableOpacity onPress={()=>this._onPress()} style={styles.iconView}>
									<Image style={styles.icon} source={imgurl}/>
									<Text style={styles.iconText}>{textname}</Text>
							 </TouchableOpacity>
		return button
	}
	_onPress(){
		this.refs.toast.show('栏目正在建设中。。')
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'更多'}/>
				<ScrollView style={styles.content}>
					<View>
						<View style={{flexDirection:'row',alignItems:'center'}}>
							<View style={styles.points}/>
							<Text>政务服务</Text>
						</View>
						<View style={styles.appList}>
							{this._buttonRender(require("../../img/zhengwufuwu.png"),"政务服务")}
							{this._buttonRender(require("../../img/zaixianbanshi.png"),"在线办事")}
							{this._buttonRender(require("../../img/banshizhuizong.png"),"办事追踪")}
							{this._buttonRender(require("../../img/qiyezhengxin.png"),"企业征信")}
						</View>
					</View>
					<View style={{marginTop:15}}>
						<View style={{flexDirection:'row',alignItems:'center'}}>
							<View style={styles.points}/>
							<Text>生活服务</Text>
						</View>
						<View style={styles.appList}>
							{this._buttonRender(require("../../img/shoujichongzhi.png"),"手机充值")}
							{this._buttonRender(require("../../img/yikatong.png"),"一卡通")}
							{this._buttonRender(require("../../img/gongjiaoche.png"),"公交卡")}
							{this._buttonRender(require("../../img/dianfei.png"),"电费")}
							{this._buttonRender(require("../../img/meiqifei.png"),"煤气费")}
							{this._buttonRender(require("../../img/nuanqi.png"),"供暖费")}
						</View>
					</View>
					<View style={{marginTop:15}}>
						<View style={{flexDirection:'row',alignItems:'center'}}>
							<View style={styles.points}/>
							<Text>民生服务</Text>
						</View>
						<View style={styles.appList}>
							{this._buttonRender(require("../../img/yiliao.png"),"医疗")}
							{this._buttonRender(require("../../img/jiankang.png"),"健康")}
							{this._buttonRender(require("../../img/zhangzhongbao.png"),"掌中宝")}
							{this._buttonRender(require("../../img/xiaoche.png"),"校车")}
							{this._buttonRender(require("../../img/tushuguan.png"),"图书馆")}
							{this._buttonRender(require("../../img/jingqu.png"),"景区")}
							{this._buttonRender(require("../../img/tingchechang.png"),"停车场")}
							{this._buttonRender(require("../../img/shequ.png"),"社区")}
							{this._buttonRender(require("../../img/gouwu.png"),"购物")}
							{this._buttonRender(require("../../img/yanglao.png"),"养老")}
						</View>
					</View>
					<View style={{marginTop:15}}>
						<View style={{flexDirection:'row',alignItems:'center'}}>
							<View style={[styles.points,{backgroundColor:'blue'}]}/>
							<Text>综合服务</Text>
						</View>
						<View style={styles.appList}>
							{this._buttonRender(require("../../img/gongjijin.png"),"公积金")}
							{this._buttonRender(require("../../img/weizhang.png"),"违章")}
							{this._buttonRender(require("../../img/zixingche.png"),"自行车")}
							{this._buttonRender(require("../../img/hangban.png"),"航班")}
							{this._buttonRender(require("../../img/huoche.png"),"火车")}
							{this._buttonRender(require("../../img/keche.png"),"客车")}
							{this._buttonRender(require("../../img/dianying.png"),"电影")}
							{this._buttonRender(require("../../img/jiazheng.png"),"家政")}
							{this._buttonRender(require("../../img/jiansheng.png"),"健身")}
							{this._buttonRender(require("../../img/yuping.png"),"羽乒")}
							{this._buttonRender(require("../../img/youyong.png"),"游泳")}
						</View>
					</View>
				</ScrollView>
				<Toast ref="toast"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	nav: {
		flex: 1,
		backgroundColor:'#fd7e2d'
	},
	content:{
		backgroundColor:'#fff',
		paddingLeft:10,
	},
	points:{
		backgroundColor:'red',
		width:5,
		height:5,
		borderRadius:3,
		marginRight:3
	},
	appList:{
		flexDirection:'row',
		borderBottomWidth:0.3,
		borderRightColor:'#666',
		marginTop:pxToDp(20),
		flexWrap:'wrap'
	},
	iconView:{
		width:90,
		height:70,
		alignItems:'center'
	},
	icon:{
		width:pxToDp(60),
		height:pxToDp(60),
		resizeMode:'contain'
	},
	iconText:{
		color:'#666',
    fontSize:12,
		marginTop:pxToDp(10)
	}
});


export default more;
