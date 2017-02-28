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
	TouchableOpacity,
	Switch
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class myMessage extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'消息设置'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.main}>
					<TouchableOpacity onPress={()=>this._gotorp()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>气象预警：</Text>
						<Switch value={true} style={{marginRight:pxToDp(10)}}/>
					</TouchableOpacity>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>地址灾害预警：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>洪水预警：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>深林防火预警：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>空气质量预警：</Text>
						<Switch value={true} style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>环境事件预警：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>公共卫生事件预警：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={[styles.li,{marginBottom:1}]}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>重要通知：</Text>
						<Switch value={true} style={{marginRight:pxToDp(10)}}/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	main: {
		// flex:1,
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


export default myMessage;
