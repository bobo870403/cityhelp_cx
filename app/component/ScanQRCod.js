'use strict';

import React, {
	Component,

} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Image,
	Alert,
} from 'react-native';
import pxToDp from '../util/pxToDp'
import NavBar from '../component/navBar'
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
class ScanQRCod extends Component {
	constructor(props) {
		super(props);
		this.camera = null;
		this.state = {
			camera: {
				//图像和屏幕的拉伸宽度
				aspect: Camera.constants.Aspect.fill,
				//相片存储的位置(ios默认是cameraRoll，android默认是disk)
				captureTarget: Camera.constants.CaptureTarget.cameraRoll,
				//前置还是后置摄像头；
				type: Camera.constants.Type.front,
				//摄像机横屏还是竖屏，默认是随着屏幕自动调整的；
				orientation: Camera.constants.Orientation.auto,
				//闪关灯的模式，默认是自动的；
				flashMode: Camera.constants.FlashMode.auto,
			},
			isRecording: false
		};
		this.takePicture = this.takePicture.bind(this);
		this.startRecording = this.startRecording.bind(this);
		this.stopRecording = this.stopRecording.bind(this);
		this.switchType = this.switchType.bind(this);
		this.switchFlash = this.switchFlash.bind(this);
	}
	takePicture() {
		if (this.camera) {
			this.camera.capture()
				.then((data) => console.log(data))
				.catch(err => console.error(err));
		}
	}
	startRecording() {
		if (this.camera) {
			this.camera.capture({
					mode: Camera.constants.CaptureMode.video
				})
				.then((data) => console.log(data))
				.catch(err => console.error(err));
			this.setState({
				isRecording: true
			});
		}
	}
	stopRecording() {
		if (this.camera) {
			this.camera.stopCapture();
			this.setState({
				isRecording: false
			});
		}
	}
	switchType() {
		let newType;
		const {
			back,
			front
		} = Camera.constants.Type;

		if (this.state.camera.type === back) {
			newType = front;
		} else if (this.state.camera.type === front) {
			newType = back;
		}

		this.setState({
			camera: {
				...this.state.camera,
				type: newType,
			},
		});
	}

	switchFlash() {
		let newFlashMode;
		const {
			auto,
			on,
			off
		} = Camera.constants.FlashMode;

		if (this.state.camera.flashMode === auto) {
			newFlashMode = on;
		} else if (this.state.camera.flashMode === on) {
			newFlashMode = off;
		} else if (this.state.camera.flashMode === off) {
			newFlashMode = auto;
		}

		this.setState({
			camera: {
				...this.state.camera,
				flashMode: newFlashMode,
			},
		});
	}

	_onPressBack() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={{flex:1}}>
			       <Camera
			          ref={(cam) => {
			            this.camera = cam;
			          }}
			          style={styles.preview}
			          aspect={this.state.camera.aspect}
			          captureTarget={this.state.camera.captureTarget}
			          type={this.state.camera.type}
			          flashMode={this.state.camera.flashMode}
			          defaultTouchToFocus
			          mirrorImage={false}
								onBarCodeRead={(e)=>{
									Alert.alert(e.data);
							  	console.log(e.data);
								}}
			        />
							<TouchableOpacity style={{position:'absolute',left:20,top:40,alignItems:'center'}} activeOpacity={0.8} onPress={()=>this._onPressBack()}>
								<Icon name={'ios-arrow-dropleft-outline'} size={40} color="#fff" style={{backgroundColor:'transparent',marginRight:5}}/>
				      </TouchableOpacity>
			        <View style={[styles.overlay, styles.topOverlay]}>
								{/* <Image style={{width:pxToDp(600),height:pxToDp(600)}} source={require('../../img/saoyisaoline.gif')}/> */}
			        </View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	overlay: {
		position: 'absolute',
		padding: 16,
		right: 0,
		left: 0,
		alignItems: 'center',
	},
	topOverlay: {
		top: 130,
		left: 50,
		width: 270,
		height: 270,

	},
	bottomOverlay: {
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.4)',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	captureButton: {
		padding: 15,
		backgroundColor: 'white',
		borderRadius: 40,
	},
	typeButton: {
		padding: 5,
	},
	flashButton: {
		padding: 5,
	},
	buttonsSpace: {
		width: 10,
	},
});


export default ScanQRCod;