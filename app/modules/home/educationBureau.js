'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	TouchableOpacity
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import CommitEdu from './commitEdu';
class educationBureau extends Component {
	_back() {
		this.props.navigator.pop();
	}
	_gotoEdu() {
		this.props.navigator.push({
			component: CommitEdu,
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'教育局'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.content}>
					<TouchableOpacity onPress={()=>this._gotoEdu()} style={styles.li}>
						<Text style={styles.liText}>教师资格认定</Text>
					</TouchableOpacity>
				</View> 
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		// marginBottom:pxToDp(50)
		// paddingBottom: pxToDp(250)
	},
	content: {
		flex: 1,
		backgroundColor: '#fff'
	},
	li: {
		paddingTop: pxToDp(30),
		paddingBottom: pxToDp(30),
		paddingLeft: pxToDp(20),
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)'
	},
	liText: {
		color: '#666',
		fontSize: pxToDp(30)
	}
});


export default educationBureau;