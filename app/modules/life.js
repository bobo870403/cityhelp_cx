'use strict';
//生活服务
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Dimensions,
	Image,
    Platform,
  TouchableOpacity
} from 'react-native';
const {
	height,
	width,

} = Dimensions.get('window');
import NavigationBar from 'react-native-navbar';

import pxToDp from '../util/pxToDp'
import HTTPUtil from '../util/HTTPUtil'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewList from './life/newList'
import Rank from './life/rank'
import ListContainer from './life/listContainer'
import Buttons from '../component/Buttons'
import Global from '../component/Global'
import WebApi from './life/WebApi'
import Car from './home/car'
import RoomLoad from './home/roomLoan'
import Detail from '../component/Detail'

class life extends Component {

  constructor(props) {
    super(props);

    this.state = {};
		this._renderBanner=this._renderBanner.bind(this);
  }

	componentWillMount(){
		this._getBannerData();
	}
	//查询生活服务海报
	_getBannerData(){
		let url=Global.hostip+Global.getListUri;
		var formdata=new FormData();
		formdata.append('columnAlias','xwlb');
		formdata.append('pageNum',1);
		formdata.append('pageSize',4);2
		HTTPUtil.post(url, formdata).then((json) => {
			// console.log(json)
			//处理 请求success
			if (json.success) {
				this.setState({
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
			console.warn('网络失败',json);
		})
	}
  rightFun(){
    this.props.navigator.push({
			component: NewList,
		})
  }
  leftFun(){
    this.props.navigator.push({
			component: Rank,
		})
  }
	_gotoListContaner(columnAlias,t){
		this.props.navigator.push({
			component: ListContainer,
			columnAlias:columnAlias,
			title:t
		})
	}
	_gotoWebApi(url,jss){
		this.props.navigator.push({
			component: WebApi,
			url:url,
			_js:jss,
		})
	}
	_gotoCar(){
		this.props.navigator.push({
			component: Car,

		})
	}
	_gotoHomeLoan(){
		this.props.navigator.push({
			component: RoomLoad,

		})
	}
	_gotoDetail(id){
		this.props.navigator.push({
			component: Detail,
			id:id,
		})
	}
	_renderBanner(){
		if(!this.state.datas){
			return <View/>
		}
		var renderView;
		let _this=this;
		var list=this.state.datas.map(function(d,key){
			var url;
			if(d.contentPic){
				url=d.contentPic[0]
			}else{
				url='http://bpic.588ku.com/element_origin_min_pic/01/47/29/645743e3d4812eb.jpg'
			}

			return renderView=<TouchableOpacity onPress={()=>_this._gotoDetail(d.id)}  key={key}>
													<Image style={styles.bannerImg} source={{uri:url}}/>
												</TouchableOpacity>
		})
		return list
	}
	renderPagination(index, total, context) {
		if(!this.state.datas){
			return null;
		}
		let title;
		let len=this.state.datas.length;
		if(index<=len){
			title=this.state.datas[index].summary;
		}else{
			return null;
		}

		return ( <View style = {{
					position: 'absolute',
					bottom: 10,
					left: 10,
					flexDirection:'row',
					alignItems:'center'
					}}>
					<Text style={{color:'#fff',flex:7}} numberOfLines={1}>{title}</Text>
			<Text style={{color:'#fff',flex:1}}>
					<Text style={{
						color: '#007aff',
						fontSize: 20
					}}>{index + 1}</Text>/ {
				total
			} </Text></View >
		)
	}
	render() {
		const titleConfig = {
			title: '生活服务',
			tintColor: '#666',

		};
		const tq_js="if($('#download'))$('#download').hide();if($('.news'))$('.news').hide(); window.onload =function(){$('#download').hide();$('.news').hide()}"
		const wnl_js="if($('.banner'))$('.banner').hide();window.onload =function(){$('.banner').hide();}"

		const rightButtonConfig = <TouchableOpacity
                                  onPress={()=>this.leftFun()}
                                  style={{flex:1,justifyContent:'center',alignItems: 'center',flexDirection: 'row',paddingRight:pxToDp(20)}}>
                                  <Icon
                                  name='ios-podium'
                                  size={pxToDp(50)}
                                  color='red'
                                  style={{width:pxToDp(50),height:pxToDp(50),borderWidth:1,borderColor:'red',paddingLeft:pxToDp(5)}}/>
                  						</TouchableOpacity>;
		return (
			<View style={styles.container}>
				<NavigationBar
		      	style={styles.navStyle}
		        title={titleConfig}
                />
				<ScrollView style={styles.sroll}
                  automaticallyAdjustContentInsets={false}
                  >
					<Swiper style={styles.wrapper} showsButtons={false} height={pxToDp(336)}
							 renderPagination={(index,total,context)=>this.renderPagination(index, total, context)}
							 autoplay={true}
				 		   paginationStyle={{
					            bottom: 0,
					       	}}>
					       	{this._renderBanner()}
					</Swiper>
          <View>
						<View style={styles.btnRow}>
							<Buttons type={2} _onPress={()=>this._gotoWebApi('http://wap.guoguo-app.com/?togoList=1')} text={'查快递'} iconName={'ios-bicycle'}/>
							<Buttons type={2} _onPress={()=>this._gotoWebApi('http://m.moji.com/',tq_js)} text={'天气预报'} iconName={'md-cloudy'}/>
							<Buttons type={2} _onPress={()=>this._gotoWebApi('http://yun.rili.cn/wnl/index.html',wnl_js)} text={'万年历'} iconName={'ios-calendar-outline'}/>
							<Buttons type={2} _onPress={()=>this._gotoWebApi('http://m.lottery.gov.cn/')} text={'彩票'} iconName={'md-football'}/>
						</View>
						<View style={styles.btnRow}>
							<Buttons type={2} _onPress={()=>this._gotoWebApi('http://m.cheshouye.com/api/weizhang/')} text={'交通违章'} imguri={require("../img/weizhang.png")}/>
							<Buttons type={2} _onPress={()=>this._gotoCar()} text={'车贷试算'} imguri={require("../img/car_icon.png")}/>
							<Buttons type={2} _onPress={()=>this._gotoHomeLoan()} text={'房贷试算'} imguri={require("../img/home_icon.png")}/>
							<Buttons type={2} _onPress={()=>this._gotoCar()} text={'城市黄页'} iconName={'md-list-box'}/>
						</View>
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
						<Image style={styles.img} source={require('../img/lifeImg_07.jpg')}>
							<Text style={styles.imgText}>活动预约</Text>
						</Image>
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	navStyle: {
		height: pxToDp(100),
	},
  sroll:{
      // marginBottom:pxToDp(5)
  },
  wrapper:{
      backgroundColor:'#000'
  },
	bannerImg: {
		width: width,
		height: pxToDp(336)
	},
	btnRow:{
		height:pxToDp(186),
		flexDirection:'row',
		marginTop:1,
	},
	btn:{
		flex:1,
		backgroundColor:'#fff',
		marginLeft:1,
		justifyContent:'center',
		alignItems:'center'
	},
	btnText:{
		color:'#666',
		marginTop:pxToDp(10)
	},
	tilte:{
		flexDirection:'row',
		marginTop:pxToDp(40)
	},
	imgList:{
 		marginTop:pxToDp(20),
		flexDirection:'row',
	},
	img:{
		width:pxToDp(187),
		height:pxToDp(187),
		resizeMode:Image.resizeMode.contain,
		justifyContent:'flex-end',
		alignItems:'center',
	},
	imgText:{
		backgroundColor:'transparent',
		color:'#fff',
		fontSize:pxToDp(30),
		marginBottom:pxToDp(10),
	}
});

export default life;
