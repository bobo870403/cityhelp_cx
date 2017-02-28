'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	TouchableHighlight,
	Text,
	ScrollView,
	Image,
	Alert
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import Toast, {
	DURATION
} from 'react-native-easy-toast'
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '../../util/CheckBox'
import Global from '../../component/Global'
import HTTPUtil from '../../util/HTTPUtil'
import Login from '../users/login.js'
let checkedList=[];
class voteList extends Component {

	_back() {
		this.props.navigator.pop();
	}
 checkSelect(checked,code){
	 if(checkedList.length<=0){
		 checkedList.push(code);
		 return
	 }
	 for(var key of Object.keys(checkedList)){
		 if(checkedList[key] == code){
			 checkedList.splice(key,1);
			 return
		 }else{
			 if(key == checkedList.length -1 ){
				 checkedList.push(code);
			 }
		 }
	 }
	//  console.log(checkedList);
 }
 _gotoResult(){
	 // 读取
	 Global.storage.load({
		 key: 'loginState',
		 autoSync: false,
		 syncInBackground: false
	 }).then(ret => {
		 this._fetch(ret.sessionId);

	 }).catch(err => {
		 console.warn(err.message);
		 switch (err.name) {
				 case 'NotFoundError':
					 this.props.navigator.push({
						 component: Login,
					 });
						 // TODO;
						 break;
				 case 'ExpiredError':
					 this.props.navigator.push({
						 component: Login,
					 });
						 // TODO
						 break;
		 }
	 })
 }
 _fetch(sessionId){
	 let url = Global.hostip + Global.doVote;
	 var formdata=new FormData();
	 formdata.append('options',checkedList);
	 formdata.append('contentid',this.props.route.datas.id);
	 var headers = new Headers();
	 headers.append('Cookie', 'SHAREJSESSIONID='+sessionId);
	 HTTPUtil.post(url, formdata,headers).then((json) => {
		 console.log(json)
		 //处理 请求success
		 if (json.success) {
			 Alert.alert(json.message);
		 } else {
			 //处理自定义异常
			 console.warn('异常 ');
			 this.refs.toast.show(json.message)
		 }
	 }, (json) => {
		 //TODO 处理请求fail
		 console.warn('网络失败', json);
	 })
	 //Alert.alert('温馨提示：','投票成功！');
 }
 _renderList(){
	 let data=this.props.route.datas;
	 var renderView;
	 let _this=this;
	 var list=data.ciVoteOptions.map(function(d,key){
		 var url;
		 if(d.picture){
			 url=d.picture
		 }else{
			 url='http://bpic.588ku.com/element_origin_min_pic/01/47/29/645743e3d4812eb.jpg'
		 }
		 return renderView=<View key={key} style={styles.li}>
												 <Image style={styles.img} source={{url:url}}/>
												 <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
													 <CheckBox
														label={d.code}
														checked={false}
														style={styles.check}
														onChange={(checked) => _this.checkSelect(checked,d.code)}/>
														<Text>编号:{d.code}<Text>{d.name.substring(0,4)}</Text></Text>
												 </View>
											 </View>
	 })
	 return list
 }
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'投票评选'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.title}>
					<Text style={{textAlign:'center',fontSize:pxToDp(40)}}>'十大杰出青年'评选</Text>
					<Text style={{textAlign:'center',marginTop:pxToDp(10),color:'#fd7e2d'}}>投票规则：每人仅可投一次，每次可投3-10人</Text>
				</View>
				<ScrollView
						contentContainerStyle={styles.contentContainer}
						automaticallyAdjustContentInsets={false}
						onScroll={() => { console.log('onScroll!'); }}
						scrollEventThrottle={200}
						style={styles.scrollView}>
						{this._renderList()}
				</ScrollView>
				<TouchableHighlight onPress={()=>this._gotoResult()} style={styles.btn}>
					<Text style={{color:'#fff',fontSize:pxToDp(40)}}>我要投票</Text>
				</TouchableHighlight>
				<Toast ref="toast"/>
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
	title:{
		marginTop:pxToDp(20)
	},
	img:{
		width:pxToDp(235),
		height:pxToDp(280),
		alignSelf:'center'
	},
	scrollView: {
    // height: 300,
		// flexDirection:'row'
  },
	contentContainer:{
		flexDirection:'row',
		flexWrap:'wrap',
		paddingLeft:pxToDp(30),
		paddingRight:pxToDp(30)
	},
	li:{
		width:pxToDp(338),
		height:pxToDp(330),
		marginTop:pxToDp(40)
	},
	btn: {
		backgroundColor: '#fd7e2d',
		height: pxToDp(90),
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default voteList;
