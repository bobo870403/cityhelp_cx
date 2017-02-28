'use strict';
/*
 * 进度查询
 */
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native';
import pxToDp from '../util/pxToDp'

class progressQuery extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',paddingRight:pxToDp(20),paddingLeft:pxToDp(25)}}>
				<View><Text style={styles.font}>可查询在政务服务中心办理的事项的办理进度结果信息，请 输入办理编号进行查询</Text></View>
				<View style={{marginTop:pxToDp(40)}}>
					<View style={{flexDirection:'row',alignItems: 'center',}}>
						<Text style={styles.font}>办理编号:</Text>
						<TextInput style={styles.inputText}/>
					</View>
					<View style={{flexDirection:'row',alignItems: 'center',marginTop:pxToDp(30)}}>
						<Text style={styles.font}>手机号码:</Text>
						<TextInput style={styles.inputText}/>
					</View>
					<View style={{flexDirection:'row',alignItems: 'center',marginTop:pxToDp(30)}}>
						<Text style={styles.font}>验  证  码:</Text>
						<TextInput style={styles.inputText}/>
						<View style={styles.valBtn}><Text style={{color:'#fff',backgroundColor:'transparent'}}>获取验证码</Text></View>
					</View>
				</View>
				<View>
					<TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
			          <Text style={styles.buttonText}>查询</Text>
			        </TouchableHighlight>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	font: {
		color: '#666',
		fontSize: pxToDp(30),

	},
	inputText: {
		marginLeft: pxToDp(10),
		flex: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		borderWidth: 1,
		height: pxToDp(72),
		borderRadius: pxToDp(10),
		paddingLeft: pxToDp(15)
	},
	valBtn: {
		marginLeft: pxToDp(20),
		flex: 1,
		backgroundColor: '#fd7e2d',
		height: pxToDp(72),
		borderRadius: pxToDp(10),
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: pxToDp(92),
		backgroundColor: '#999',
		borderColor: '#999',
		borderWidth: 1,
		borderRadius: 8,
		marginTop: pxToDp(30),
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});


export default progressQuery;
