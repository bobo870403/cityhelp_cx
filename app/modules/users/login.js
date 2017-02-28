'use strict';

import React, {
	Component
} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
	StyleSheet,
	View,
	Dimensions,
	TextInput,
	TouchableHighlight,
	Text,
	Image
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import Toast, {
	DURATION
} from 'react-native-easy-toast'
import NavBar from '../../component/navBar'
import HTTPUtil from '../../util/HTTPUtil'
import pxToDp from '../../util/pxToDp'
import Global from '../../component/Global'

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: null,
			password: null,
		};
	}
	phoneTextChange(text) {
		this.setState({
			phone: text
		})
	}
	passwordTextChange(text) {
		this.setState({
			password: text
		})
	}
	_back() {
		this.props.navigator.pop();
	}
	onPress() {
		// if (!Global.regPhone.test(this.state.phone)) {
		// 	return this.refs.toast.show('手机号不正确')
		// }
		if (!Global.regPassWord.test(this.state.password)) {
			return this.refs.toast.show('密码不正确')
		}
		this._logining();
	}
	_logining() {
		let url = Global.hostip + Global.login;
		var formdata = new FormData();
		formdata.append('userid', this.state.phone);
		formdata.append('password', this.state.password);
		formdata.append('isRemember', true);
		HTTPUtil.post(url, formdata).then((json) => {
			//处理 请求success
			if (json.success) {
				// console.log(json);
				Global.storage.save({
					key: 'loginState',
					rawData: json.data,
				})
				this.refs.toast.show('登录成功');
				this._back();
			} else {
				//处理自定义异常
				// console.warn('异常 ');
				this.refs.toast.show(json.message)
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败:', json);
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
						<NavBar style={styles.nav} title={'登录城域帮'} isShowLeftButton={1} leftFun={()=>this._back()}/>
						<View style={styles.container}>
							<TextInput placeholder={'请输入11位手机号码'}
								placeholderTextColor={'#ccc'}
								autoCapitalize={'none'}
								onChangeText={(text)=>this.phoneTextChange(text)}
								value ={this.state.phone}
								maxLength={11}
								style={styles.inputText}/>
							<TextInput placeholder={'密码'}
								placeholderTextColor={'#ccc'}
								autoCapitalize={'none'}
								secureTextEntry ={true}
								selectionColor={'#fd7e2d'}
								onChangeText={(text)=>this.passwordTextChange(text)}
								value ={this.state.password}
								maxLength={12}
								style={styles.inputText}/>
								<TouchableHighlight style={styles.button} onPress={()=>this.onPress()} underlayColor='#fd7e2d'>
						          <Text style={styles.buttonText}>登录</Text>
						        </TouchableHighlight>
						</View>
						<View style={styles.shareContainer}>
							<View style={styles.img_view}>
								<Image style={styles.img} source={require('../../img/social-qq.png')}/>
							</View>
							<View style={styles.img_view}>
								<Image style={styles.img} source={require('../../img/social-wechat.png')}/>
							</View>
							<View style={styles.img_view}>
								<Image style={styles.img} source={require('../../img/social-weibo.png')}/>
							</View>
						</View>
						<Toast ref="toast"/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 30,
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
	},
	shareContainer: {
		flex: 1.3,
		flexDirection: 'row'
	},
	inputText: {
		marginTop: 10,
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#ccc',
		paddingLeft: 10,
		fontFamily: Global.font
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center',
		fontFamily: Global.font
	},
	button: {
		height: pxToDp(92),
		backgroundColor: '#fd7e2d',
		borderColor: '#fd7e2d',
		borderWidth: 1,
		borderRadius: 8,
		marginTop: pxToDp(30),
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	img_view: {
		marginTop: 30,
		flex: 1,
		alignItems: 'center'
	},
	img: {
		width: 50,
		height: 50,

	}
});

export default login;