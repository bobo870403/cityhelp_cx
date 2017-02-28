'use strict';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../../component/navBar'
import pxToDp from '../../util/pxToDp'
import Picker from 'react-native-picker';
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';

var {
	height,
	width
} = Dimensions.get('window');
var Global = require('../../component/Global')
import Toast, {
	DURATION
} from 'react-native-easy-toast'
import HTTPUtil from '../../util/HTTPUtil'
let pickerData = [1, 2, 3, 4];
let selectedValue = [3];
class ReservationInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			pickerIconStatePage: 'ios-arrow-down-outline',
			isShowLoading: 0,
		};
	}

	_back() {
		this.props.navigator.pop();
	}
	_showPagePicker() {
		this.picker.toggle();
	}
	_pickerDone(pickedValue) {
		this.setState({
			page: pickedValue
		})
	}
	_userPhoneChange(text) {
		this.setState({
			phoneNum: text
		})
	}
	_userNameChange(text) {
		this.setState({
			uname: text
		})
	}
	_submitHandler() {
		this.setState({
			isShowLoading: 1,
		})
		let url = Global.hostip + Global.addActivityBook;
		// console.log(url)
		let formdata = new FormData();
		formdata.append('activityAlias', this.props.route.data.activityAlias);
		formdata.append('ticketNum', this.state.page);
		formdata.append('telephone', this.state.phoneNum);
    var headers = new Headers();
    headers.append('Cookie', 'SHAREJSESSIONID='+this.props.route.usersData.sessionId);
		HTTPUtil.post(url, formdata,headers).then((json) => {
			// console.log(json)
			//处理 请求success
			if (json.success) {
				this.setState({
					isShowLoading: 0,
				})
			} else {
				//处理自定义异常
				this.setState({
					isShowLoading: 0,
				})
				this.refs.toast.show(json.message)
			}
		}, (json) => {
			//TODO 处理请求fail
			this.setState({
				isShowLoading: 0,
			})
			console.warn('网络失败:' + JSON.stringify(json));
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
        		<NavBar style={styles.nav} title={'预约信息'} isShowLeftButton={1} leftFun={()=>this._back()}/>
	        	<ScrollView style={styles.scrollContent} automaticallyAdjustContentInsets={false}>
	           		<View style={styles.contentInfo}>
              			<View style={styles.rowView}>
			                <Text style={{fontFamily: 'FZXiYuan-M01S'}}>活动: </Text>
			                <Text style={{marginLeft:pxToDp(20),fontWeight:'bold',fontFamily: 'FZXiYuan-M01S'}}>{(this.props.route.data)?this.props.route.data.activityName:''}</Text>
              			</View>
			            <View style={[styles.rowView,{borderBottomWidth:0}]}>
			                <Text style={{fontFamily: 'FZXiYuan-M01S'}}>场地: </Text>
			                <Text style={{marginLeft:pxToDp(20),fontWeight:'bold',width:pxToDp(650),fontFamily: 'FZXiYuan-M01S'}}>{(this.props.data)?this.props.data.address:'暂无'}</Text>
			            </View>
            		</View>
		            <View style={[styles.contentInfo,{marginTop:pxToDp(10)}]}>
		              <View style={styles.rowView}>
		                <Text style={styles.formtitle,{width:68,fontFamily:'FZXiYuan-M01S'}}>开始日期:</Text>
		                <Text style={{color:'#c9c9c9',fontFamily:'FZXiYuan-M01S'}}>{(this.props.route.data)?this.props.route.data.startDate:'暂无'}</Text>
		              </View>
		              <View style={styles.rowView}>
		                <Text style={styles.formtitle,{width:68,fontFamily:'FZXiYuan-M01S'}}>结束日期:</Text>
		                <Text style={{color:'#c9c9c9',fontFamily:'FZXiYuan-M01S'}}>{(this.props.route.data)?this.props.route.data.endDate:'暂无'}</Text>
		              </View>
		              <View style={[styles.rowView,{borderBottomWidth:0}]}>
		                <Text style={styles.formtitle}>预约张数:</Text>
		                <TouchableOpacity onPress={()=>this._showPagePicker()} style={{flexDirection:'row',alignItems:'center'}}>
		                  <Text style={{color:'#c9c9c9'}}>{this.state.page+'张'}</Text>
		                  <Icon
		                      name={this.state.pickerIconStatePage}
		                      size={20}
		                      color='#c9c9c9'
		                      style={styles.icon}/>
		                </TouchableOpacity>
		              </View>
		            </View>
		           <View style={[styles.contentInfo,{marginTop:pxToDp(20)}]}>
		              <View style={styles.rowView}>
		                <Text style={styles.formtitle}>手机号:</Text>
		                <TextInput style={styles.inputView}
		                	onChangeText={(text)=>this._userPhoneChange(text)}
		                	keyboardType={'numeric'}
		                	placeholder ='请输入预约的手机号码'
		                	maxLength={11}>
		                </TextInput>
		              </View>
		              <View style={styles.rowView}>
		                <Text style={styles.formtitle}>联系人:</Text>
		                <TextInput style={styles.inputView}
		                	onChangeText={(text)=>this._userNameChange(text)}
		                	placeholder ='联系人姓名'
		                	maxLength={5}>
		                </TextInput>
		              </View>
		           </View>
	        	</ScrollView>
	            <TouchableOpacity onPress={()=>this._submitHandler()}>
		          <View style={styles.submit}>
		               <Icon
		                        name='ios-checkmark-outline'
		                        size={20}
		                        color='#c9c9c9'
		                        style={styles.icon}/>
		                <Text style={styles.submitText}>提交预约</Text>
		          </View>
        		</TouchableOpacity>
        		<Picker
        		 	ref={picker => this.picker = picker}
			        style={{
			            height: 200
			        }}
			        showDuration={300}
			        showMask={true}
			        pickerData={[1,2,3,4]}//picker`s value List
			        selectedValue={[1]}//default to be selected value
			        onPickerDone={(pickedValue)=>this._pickerDone(pickedValue)}//when confirm your choice
			      />
			      <Toast ref="toast"/>
			      {this._requestLoading()}
      		</View>
		)
	}
	_requestLoading() {
		return (
			<View style={{opacity:this.state.isShowLoading,position:'absolute',top:height/2-40,left:width/2-45,width:90,height:90,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.7)'}}>
	            <ActivityIndicator color = {'rgba(255,255,255,0.7)'} size="small" />
	            <Text style={{color:'rgba(255,255,255,0.7)'}}>正在预约...</Text>
	      	</View>
		);
	}
}
const styles = StyleSheet.create({
	titleContainer: {
		flex: 1,
		backgroundColor: Global.baseColor,
		paddingBottom: 10
	},
	tiltleName: {
		marginTop: 20,
		fontSize: 0.05 * width,
		color: '#ffffff',
		textAlign: 'center',
		backgroundColor: 'transparent',
		fontFamily: 'FZXiYuan-M01S'
	},
	scrollContent: {
		flex: 12,
		backgroundColor: 'rgba(215,221,183,0.5)',
	},
	rowView: {
		flexDirection: 'row',
		marginLeft: pxToDp(20),
		height: 0.07 * height,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
		backgroundColor: '#ffffff'
	},
	formtitle: {
		flex: 1,
		fontFamily: 'FZXiYuan-M01S'
	},
	inputView: {
		flex: 4.5,
		marginTop: pxToDp(10),
		marginRight: pxToDp(10),
		marginBottom: pxToDp(10),
		paddingLeft: pxToDp(10),
		borderRadius: 8,
		fontFamily: 'FZXiYuan-M01S',
		// borderWidth: 1,
		// borderColor: 'rgba(0,0,0,0.1)'
	},
	contentInfo: {
		backgroundColor: '#ffffff'
	},
	icon: {
		marginLeft: pxToDp(20),
		width: 20,
		height: 20,
		color: 'rgb(93,183,255)'
	},
	submit: {
		flexDirection: 'row',
		backgroundColor: '#5172bc',
		justifyContent: 'center',
		alignItems: 'center',
		height: pxToDp(80),
	},
	submitText: {
		color: '#ffffff',
	}
});


export default ReservationInfo;
