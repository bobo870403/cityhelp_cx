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
class rssSetting extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'订阅设置'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.main}>



					<TouchableOpacity onPress={()=>this._gotorp()} style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>教育相关：</Text>
						<Switch value={true} style={{marginRight:pxToDp(10)}}/>
					</TouchableOpacity>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>医疗相关：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>医疗相关：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>交通相关：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>安全主题：</Text>
						<Switch value={true} style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={styles.li}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>税务相关：</Text>
						<Switch style={{marginRight:pxToDp(10)}}/>
					</View>
					<View style={[styles.li,{marginBottom:1}]}>
						<Text style={{marginLeft:pxToDp(25),flex:1}}>旅游相关：</Text>
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


export default rssSetting;
