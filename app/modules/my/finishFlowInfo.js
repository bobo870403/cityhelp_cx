'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	TextInput,
	SegmentedControlIOS,
	TouchableOpacity,
	Alert
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class finishFlowInfo extends Component {
	_back() {
		this.props.navigator.pop();
	}
	_submit() {
		Alert.alert(
			'温馨提醒',
			'您提交的审批已处理，将在三个工作日内给予批复，请耐心等待！', [{
				text: '我知道了',
				onPress: () => console.log('OK Pressed!')
			}, ]
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'完结事件详情'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.content}>
					<View style={styles.title}>
						<Text style={styles.titleText}>温馨提示</Text>
					</View>
					<View style={styles.inputContainer}>
            <Text style={{color:'#666'}}>1、您的申请事项已通过预审批，请尽快携带资料到窗口单位办理正式审批手续；</Text>
            <Text style={{color:'#666',marginTop:pxToDp(10)}}>2、请保证您所携带资料与网上提交资料保持一致，具体如下所示：</Text>

					</View>
					<View style={styles.title}>
						<Text style={styles.titleText}>材料信息信息</Text>
					</View>
					<View>
						<View style={styles.infoSing}>
							<View style={{borderRightWidth:1,borderRightColor:'rgba(0,0,0,0.1)',paddingRight:pxToDp(50)}}>
								<Text style={styles.infoText}>材料名称:<Text style={{color:'#666'}}>学校合并的申请书</Text></Text>
								<Text style={styles.infoText}>详细要求:<Text style={{color:'#666'}}>A4纸，用电脑打印</Text></Text>
								<Text style={styles.infoText}>必  要 性:<Text style={{color:'#666'}}>必要</Text></Text>
							</View>
							<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
								<View style={{width:pxToDp(255),height:pxToDp(74),backgroundColor:'#fd7e2d',borderRadius:pxToDp(10),justifyContent:'center',alignItems:'center'}}>
									<Text style={{color:'#fff',fontSize:pxToDp(34)}}>原图展示</Text>
								</View>
							</View>
						</View>
						<View style={styles.infoSing}>
							<View style={{borderRightWidth:1,borderRightColor:'rgba(0,0,0,0.1)',paddingRight:pxToDp(50)}}>
								<Text style={styles.infoText}>材料名称:<Text style={{color:'#666'}}>学校合并的申请书</Text></Text>
								<Text style={styles.infoText}>详细要求:<Text style={{color:'#666'}}>A4纸，用电脑打印</Text></Text>
								<Text style={styles.infoText}>必  要 性:<Text style={{color:'#666'}}>必要</Text></Text>
							</View>
							<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
								<View style={{width:pxToDp(255),height:pxToDp(74),backgroundColor:'#fd7e2d',borderRadius:pxToDp(10),justifyContent:'center',alignItems:'center'}}>
									<Text style={{color:'#fff',fontSize:pxToDp(34)}}>原图展示</Text>
								</View>
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
		backgroundColor: '#f0f0f0',
	},
	content: {
		flex: 1,
		backgroundColor: '#fff'
	},
	title: {
		paddingTop: pxToDp(25),
		paddingBottom: pxToDp(25),
		paddingLeft: pxToDp(15),
		backgroundColor: '#fd7e2d'
	},
	titleText: {
		color: '#fff'
	},
	inputContainer: {
		paddingLeft: pxToDp(30),
		paddingRight: pxToDp(30),
    paddingBottom:pxToDp(30),
    paddingTop:pxToDp(30),
		marginBottom: pxToDp(30),
	},
	input: {
		marginTop: pxToDp(30),
		height: pxToDp(73),
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.3)',
		borderRadius: pxToDp(10),
		paddingLeft: 10
	},
	segmentedControl: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: pxToDp(25),
		// paddingRight: pxToDp(25),
		backgroundColor: '#fff'
	},
	infoSing: {
		flexDirection: 'row',
		paddingTop: pxToDp(25),
		paddingBottom: pxToDp(25),
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',

	},
	infoText: {
		marginLeft: pxToDp(30),
		fontSize: pxToDp(30),
		lineHeight: pxToDp(50),
	}
});


export default finishFlowInfo;
