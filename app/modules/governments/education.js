'use strict';
/*
	教育服务
 */
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	Image,
	Dimensions,
	TouchableHighlight,
	ListView
} from 'react-native';

const {
	height,
	width
} = Dimensions.get('window');

import pxToDp from '../../util/pxToDp'
import HTTPUtil from '../../util/HTTPUtil'
import NavBar from '../../component/navBar'
import Global from '../../component/Global'
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'

import Tea from './teachers'

var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,

});
class education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datas:null,
			loaded:false,
		};
		this._renderList=this._renderList.bind(this);
	}
	componentWillMount(){
		this._getList();
	}
	_getList(){
		let url=null;
		let formdata=null;
		if(this.props.route.department){
			url=Global.hostip+Global.govGetListService;
			formdata={
				'groupCode':this.props.route.id,
			}
		}else{
			 url=Global.hostip+Global.govListUri;
			formdata={
				'fwlx':this.props.route.fwlx,
				'fwzt':this.props.route.fwzt,
				'pageNum':1,
				'pageSize':9,
			}
		}

		HTTPUtil.get(url, formdata).then((json) => {
			//处理 请求success
			if (json.success) {
				console.log(json)
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
	_back() {
		this.props.navigator.pop();
	}
	_onPressButton() {
		this.props.navigator.push({
			component: Tea,

		})
	}
	_renderList(data, sectionID, rowID){
		return(
			<TouchableHighlight onPress={()=>this._navHandleChange(data)}>
				<View style={styles.list_sing}>
					<Text style={styles.list_text} numberOfLines={1}>
						{data.fwmc}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
	_navHandleChange(data){
		this.props.navigator.push({
			component: Tea,
			id:data.id,
		})
	}
	render() {
		if(!this.state.loaded){
			return null
		}
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={(this.props.route.title)?this.props.route.title:''} isShowLeftButton={1} leftFun={()=>this._back()}/>
				 <ScrollView style={styles.scroll}>
				 	<View style={styles.banner}>
				 		 <Swiper style={styles.wrapper} showsButtons={false} height={pxToDp(435)}
				 		 paginationStyle={{
					            bottom: 0,
					       	}}>
					       	<Image style={styles.bannerImg} source={require('../../img/edubanner.png')}/>
					        <View style={styles.slide2}>
					          <Text style={styles.text}>第二张图片</Text>
					        </View>
					        <View style={styles.slide3}>
					          <Text style={styles.text}>第三张图片</Text>
					        </View>
					     </Swiper>
				 	</View>
				 	<View style={styles.t1}>
						<View style={{width:pxToDp(45),height:pxToDp(45),backgroundColor:'#97d864',borderRadius:pxToDp(5),justifyContent: 'center',alignItems: 'center',}}>
				 			<Icon name="md-locate" size={pxToDp(44)} color="#fff" style={{backgroundColor:'transparent'}}/>
				 		</View>
			        	<Text style={{color:'#666',marginLeft:pxToDp(10)}}>教育服务</Text>
				 	</View>
				 	<View style={styles.btnList}>
				 		 <TouchableHighlight style={{flex:1,}} underlayColor={'gainsboro'}>
				 		 	<View style={{justifyContent: 'center',alignItems: 'center',}}>
					 			<View style={{width:pxToDp(128),height:pxToDp(128),backgroundColor:'#66ccff',borderRadius:pxToDp(52),justifyContent: 'center',alignItems: 'center',}}>
					 				<Icon name="md-cube" size={pxToDp(90)} color="#fff" style={{backgroundColor:'transparent'}}/>
					 			</View>
					 			<Text style={{color:'#666',marginTop:pxToDp(10)}}>攻略指南</Text>
				 			</View>
    					</TouchableHighlight>

				 		<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
				 			<View style={{width:pxToDp(128),height:pxToDp(128),backgroundColor:'#66cccc',borderRadius:pxToDp(52),justifyContent: 'center',alignItems: 'center',}}>
				 				<Icon name="md-list-box" size={pxToDp(90)} color="#fff" style={{backgroundColor:'transparent'}}/>
				 			</View>
				 			<Text style={{color:'#666',marginTop:pxToDp(10)}}>教委名录</Text>
				 		</View>
				 		<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
				 			<View style={{width:pxToDp(128),height:pxToDp(128),backgroundColor:'#ff99cc',borderRadius:pxToDp(52),justifyContent: 'center',alignItems: 'center',}}>
				 				<Icon name="md-people" size={pxToDp(90)} color="#fff" style={{backgroundColor:'transparent'}}/>
				 			</View>
				 			<Text style={{color:'#666',marginTop:pxToDp(10)}}>人事考试</Text>
				 		</View>
				 		<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
				 			<View style={{width:pxToDp(128),height:pxToDp(128),backgroundColor:'#ff9966',borderRadius:pxToDp(52),justifyContent: 'center',alignItems: 'center',}}>
				 				<Icon name="md-ribbon" size={pxToDp(90)} color="#fff" style={{backgroundColor:'transparent'}}/>
				 			</View>
				 			<Text style={{color:'#666',marginTop:pxToDp(10)}}>职业鉴定</Text>
				 		</View>
				 	</View>
				 	<View style={styles.t1}>
				 		<View style={{width:pxToDp(45),height:pxToDp(45),backgroundColor:'#97d864',borderRadius:pxToDp(5),justifyContent: 'center',alignItems: 'center',}}>
				 			<Icon name="md-locate" size={pxToDp(44)} color="#fff" style={{backgroundColor:'transparent'}}/>
				 		</View>
			        	<Text style={{color:'#666',marginLeft:pxToDp(10)}}>攻略指南</Text>
				 	</View>
				 	<View style={styles.newList}>
						{this._renderListContainer()}
				 	</View>
    			</ScrollView>

			</View>
		);
	}
	_renderListContainer(){
		if(this.state.datas.length>0){
			return(
				<ListView style={(this.state.datas.length>=4)?{flex:1,overflow:'hidden'}:{height:180,overflow: 'hidden'}}
					initialListSize={20}
					pageSize={10}
					removeClippedSubviews={true}
					dataSource={ds.cloneWithRows(this.state.datas)} // 渲染的数据聚合
					renderRow={this._renderList}  // 单一条数模板

					minPulldownDistance={30}   // 最新下拉长度
				/>)
		}else{
			return (
				<View style={{height:180,alignItems:'center',paddingTop:30}}>
					<Text style={{color:'#444'}}>目前还没有攻略指南..</Text>
				</View>)
		}

	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	nav: {
		backgroundColor: 'blue'
	},
	scroll: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.1)'
	},
	banner: {
		height: pxToDp(435),
		backgroundColor: '#fff'
	},
	t1: {
		height: pxToDp(82),
		backgroundColor: '#fff',
		marginTop: 1,
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: pxToDp(30)
	},
	btnList: {
		height: pxToDp(235),
		backgroundColor: '#fff',
		marginTop: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	newList: {

		backgroundColor: '#fff',
		marginTop: 1
	},
	list_sing: {
		height: pxToDp(100),
		justifyContent: 'center',
		// alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		marginLeft: pxToDp(35),
		marginRight: pxToDp(35),
	},
	list_text: {
		fontSize: pxToDp(30),
		color: '#666'
	},

	wrapper: {

	},
	bannerImg: {
		width: width,
		height: pxToDp(435)
	}
});


export default education;
