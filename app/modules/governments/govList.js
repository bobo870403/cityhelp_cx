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
class govList extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'通用设置'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.main}>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>文化市场统一举报热线：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12318</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>价格监督举报电话：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12358</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>机构编制违规举报电话：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12310</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>民工维权热线电话：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12333</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>公共环境卫生投诉：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12320</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>电力系统客服电话：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>95598</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>质量监督电话：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12365</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>环保局监督电话：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12369</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>政府公益服务接入网：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12345</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>this._gotoRssSetting()} style={styles.li}>
						<Icon name="ios-call" size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
						<Text style={{marginLeft:pxToDp(25),flex:1,color:'#999'}}>全国法律服务热线：</Text>
						<Text style={{color:'#fd7e2d',paddingRight:pxToDp(25),fontSize:pxToDp(30)}}>12348</Text>
					</TouchableOpacity>
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


export default govList;
