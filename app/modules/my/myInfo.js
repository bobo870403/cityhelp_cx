'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import RevisePasswrod from './revisePasswrod';
import Global from '../../component/Global'
class myInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	_back() {
		this.props.navigator.pop();
	}
	_gotorp() {
		this.props.navigator.push({
			component: RevisePasswrod,
		})
	}
	_selectPhotoTapped() {
		const options = {
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			cameraType: 'back',
			takePhotoButtonTitle: '拍照',
			chooseFromLibraryButtonTitle: '相册',
			cancelButtonTitle: '取消',
			storageOptions: {
				skipBackup: true
			}
		};
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
			if (response.didCancel) {
				console.log('User cancelled photo picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				var source;

				// You can display the image using either:
				source = {
					uri: 'data:image/jpeg;base64,' + response.data,
					isStatic: true
				};
				// Or:
				// if (Platform.OS === 'android') {
				// 	source = {
				// 		uri: response.uri,
				// 		isStatic: true
				// 	};
				// } else {
				// 	source = {
				// 		uri: response.uri.replace('file://', ''),
				// 		isStatic: true
				// 	};
				// }
				this.setState({
					avatarSource: source
				});
			}
		});
	}
 	_outPress(){
		Global.storage.remove({
    	key: 'loginState'
		});
		this._back();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'个人信息'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.main}>
					<TouchableOpacity onPress={()=>this._selectPhotoTapped()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>昵称：</Text>
						<View style={{flex:16,justifyContent: 'center',alignItems: 'flex-end',}}>
							<Image style={{width:pxToDp(138),height:pxToDp(138)}} source={(this.state.avatarSource)?{uri:this.state.avatarSource.uri,scale:1}:require('../../img/usericon.png')}/>
						</View>
						<Icon name="ios-arrow-forward-outline" size={30} color="#999" style={{flex:1,marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>昵称：</Text>
						<Text style={{flex:1,textAlign:'right'}}>王老余</Text>
						<Icon name="ios-arrow-forward-outline" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>手机号码：</Text>
						<Text style={{flex:1,textAlign:'right'}}>18667121101</Text>
						<Icon name="ios-arrow-forward-outline" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>邮箱：</Text>
						<Text style={{flex:1,textAlign:'right'}}>WWSF@QQ.COM</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<TouchableOpacity onPress={()=>this._gotorp()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>登录密码</Text>
						<Text style={{flex:1,textAlign:'right'}}>WWSF@QQ.COM</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>姓名：</Text>
						<Text style={{flex:1,textAlign:'right'}}>李三生</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>性别：</Text>
						<Text style={{flex:1,textAlign:'right'}}>男</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25)}}>实名认证：</Text>
						<Text style={{flex:1,textAlign:'right'}}>已认证：</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<View style={[styles.li]}>
						<Text style={{marginLeft:pxToDp(25)}}>积分：</Text>
						<Text style={{flex:1,textAlign:'right'}}>900</Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</View>
					<TouchableOpacity onPress={()=>this._outPress()} style={[styles.li,{marginBottom:1}]}>
						<Text style={{marginLeft:pxToDp(25)}}>退出：</Text>
						<Text style={{flex:1,textAlign:'right'}}> </Text>
						<Icon name="ios-arrow-forward" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	main: {
		marginTop:15,
		backgroundColor: 'rgba(0,0,0,0.1)'
	},
	li: {
		paddingTop: pxToDp(20),
		paddingBottom: pxToDp(20),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 1
	}

});


export default myInfo;
