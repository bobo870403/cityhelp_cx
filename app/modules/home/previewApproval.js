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

import EducationBureau from './educationBureau';
class previewApproval extends Component {
	_back() {
		this.props.navigator.pop();
	}
	_gotoEdu() {
		this.props.navigator.push({
			component: EducationBureau,
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'预审批服务'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View>
					<View style={styles.titleBg}>
						<Text style={styles.title}>温馨提示</Text>
					</View>
					<View style={{backgroundColor:'#fff',flex:1}}>
						<Text style={{color:'#666',marginLeft:pxToDp(40),marginRight:pxToDp(40),marginTop:pxToDp(20),marginBottom:pxToDp(20)}}>1、上传申报材料，由专人对所提交材料进行预审批，确认材料合格后，再由申请人携带相关材料到窗口办理正式审批手续，减少携带材料不准</Text>
						<Text style={{color:'#666',marginLeft:pxToDp(40),marginRight:pxToDp(40),marginTop:pxToDp(20),marginBottom:pxToDp(20)}}>2、上传申报材料，由专人对所提交材料进行预审批，确认材料合格后，再由申请人携带相关材料到窗口办理正式审批手续，减少携带材料不准</Text>
					</View>

					<View style={styles.titleBg}>
						<Text style={styles.title}>办理部门</Text>
					</View>
					<View style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
						<View style={styles.row}>
							<TouchableOpacity onPress={()=>this._gotoEdu()} style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</TouchableOpacity>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
						</View>
						<View style={[styles.row,{marginTop:1}]}>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
						</View>
						<View style={[styles.row,{marginTop:1}]}>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
						</View>
						<View style={[styles.row,{marginTop:1,marginBottom:1}]}>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
							<View style={styles.block}>
								<Text style={styles.texts}>教育局</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// backgroundColor: '#f0f0f0'
	},
	titleBg: {
		height: pxToDp(80),
		backgroundColor: '#fd7e2d',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: '#fff',
		fontSize: pxToDp(30)
	},
	row: {
		height: pxToDp(117),
		flexDirection: 'row'
	},
	block: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 1,
		backgroundColor: '#fff'
	},
	texts: {
		color: "#fd7e2d",
		fontSize: pxToDp(26)
	}
});


export default previewApproval;
