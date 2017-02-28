'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	Image,
	TouchableOpacity,
} from 'react-native';
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Buttons from '../../component/Buttons'
import ScanQRCod from '../../component/ScanQRCod'
import Toast, {
	DURATION
} from 'react-native-easy-toast'
class cloudPay extends Component {
	_gotosys() {
		this.props.navigator.push({
			component: ScanQRCod,
		})
	}
	_onPress() {
		this.refs.toast.show('栏目正在建设中。。')
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.head}>
					<Text style={styles.head_title}>云支付</Text>
					<View style={styles.headBtn}>
						<Buttons _onPress={()=>this._gotosys()} type={3} imguri={require('../../img/saoyisao.png')} text={'扫一扫'}/>
						<Buttons _onPress={()=>this._onPress()} type={3} imguri={require('../../img/weirenzhen.png')} text={'未认证'}/>
						<Buttons _onPress={()=>this._onPress()} type={3} imguri={require('../../img/fukuanma.png')} text={'付款码'}/>
					</View>
				</View>
				<View style={styles.main}>
					<View style={styles.main_panel}>
						<View style={styles.main_panel_title}>
							<Image style={styles.main_panel_title_img} source={require('../../img/bianminfuwu.png')}/>
							<Text style={styles.main_panel_title_text}>便民服务</Text>
						</View>
						<View style={styles.main_panel_conent}>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/huafei.png')} text={'付款码'}/>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/yikatong_yun.png')} text={'一卡通'}/>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/gongjiaoka.png')} text={'公交卡'}/>
						</View>
					</View>
					<View style={styles.main_panel}>
						<View style={styles.main_panel_title}>
							<Image style={styles.main_panel_title_img} source={require('../../img/shenghuojiaofei.png')}/>
							<Text style={styles.main_panel_title_text}>生活缴费</Text>
						</View>
						<View style={styles.main_panel_conent}>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/dianfei_yun.png')} text={'电费'}/>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/shuifei.png')} text={'水费'}/>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/meiqifei_yun.png')} text={'煤气费'}/>
							<Buttons _onPress={()=>this._onPress()} type={4} imguri={require('../../img/nuanqi_yun.png')} text={'暖气费'}/>
						</View>
					</View>
				</View>
				<Toast ref="toast"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	head: {
		height: pxToDp(320),
		backgroundColor: '#fd7e2d',
		paddingTop: 20,
		alignItems: 'center',
	},
	head_title: {
		color: '#fff',
		fontSize: 18,
		marginTop: 10,
	},
	headBtn: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center'
	},
	main: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
	main_panel: {
		minHeight: 150,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
		borderRadius: 7,
		backgroundColor: '#fff',
	},
	main_panel_title: {
		height: pxToDp(80),
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		marginLeft: 5,
		marginRight: 5,
		alignItems: 'center',
		flexDirection: 'row',
	},
	main_panel_title_img: {
		width: pxToDp(38),
		height: pxToDp(34),
		resizeMode: 'contain',
	},
	main_panel_title_text: {
		color: "#fd8b45",
		marginLeft: 5,
	},
	main_panel_conent: {
		marginTop: pxToDp(45),
		marginBottom: pxToDp(45),
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
	}
});
export default cloudPay;
