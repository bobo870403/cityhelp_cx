'use strict';
/*
 * 个人服务
 */
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import pxToDp from '../util/pxToDp'
import Edu from './governments/education'
import TalkThingsOver from './governments/talkThingsOver'
import Complain from './governments/Complain'
import GovList from './governments/govList'
import Buttons from '../component/Buttons'
class personalService extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	_onPressButton(fwlx,fwzt,t) {
		this.props.navigator.push({
			component: Edu,
			title:t,
			fwlx:fwlx,
			fwzt:fwzt,
		})
	}
	_gototk() {
		this.props.navigator.push({
			component: TalkThingsOver,
		})
	}
	_gotoComplain() {
		this.props.navigator.push({
			component: Complain,
		})
	}
	_gotoGovList(){
		this.props.navigator.push({
			component: GovList,
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.serviceContainer}>
		        		<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_hj','户籍')} text={'户籍'} iconName={'md-book'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_jycy','就业创业')} text={'就业创业'} iconName={'ios-people-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_sbjz','社会保障')} text={'社会保障'} iconName={'ios-card'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_zf','住房服务')} text={'住房服务'} iconName={'ios-home-outline'} colors={'#fd7e2d'}/>

		        		</View>
		        		<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_jt','交通出行')} text={'交通出行'} iconName={'ios-bus-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_cjrj','出境入境')} text={'出境入境'} iconName={'ios-person-outline'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_nsjf','缴税纳税')} text={'缴税纳税'} iconName={'ios-albums-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_ylws','医疗卫生')} text={'医疗卫生'} iconName={'ios-medkit-outline'}/>
		        		</View>
		        		<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_jyky','教育科研')} text={'教育科研'} iconName={'ios-brush-outline'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_sfgz','司法公正')} text={'司法公正'} iconName={'ios-barcode'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_mzzj','民族宗教')} text={'民族宗教'} iconName={'logo-freebsd-devil'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_xfwq')} text={'消费维权'} iconName={'logo-usd'} colors={'#fd7e2d'}/>
		        		</View>
								<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_wwty','文化体育')} text={'文化体育'} iconName={'ios-basketball-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gr','gr_hjqx','环境气象')} text={'环境气象'} iconName={'ios-cloud-outline'}/>
									<Buttons type={1}/>
									<Buttons type={1}/>

		        		</View>
		        </View>
		        <View style={styles.helpContainer}>
		        		<View style={styles.helpRow}>
		        			<TouchableOpacity onPress={()=>this._gototk()} style={styles.helpBtn}>
		        				<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
		        					<View style={{backgroundColor:'#f6695e',width:pxToDp(100),height:pxToDp(100),borderRadius:pxToDp(50),alignItems:'center',justifyContent:'center'}}>
		        						<Icon name="ios-chatbubbles" size={40} color="#fff" style={{backgroundColor:'transparent'}}/>
		        					</View>
		        				</View>
		        				<View style={{flex:1,justifyContent:'center',paddingRight:pxToDp(10)}}>
		        					<Text style={{color:'#666',fontSize:pxToDp(30)}}>咨询建议</Text>
		        				</View>
		        			</TouchableOpacity>
		        			<TouchableOpacity onPress={()=>this._gotoComplain()} style={styles.helpBtn}>
		        				<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
		        					<View style={{backgroundColor:'#ff8c45',width:pxToDp(100),height:pxToDp(100),borderRadius:pxToDp(50),alignItems:'center',justifyContent:'center'}}>
		        						<Icon name="md-notifications" size={40} color="#fff" style={{backgroundColor:'transparent'}}/>
		        					</View>
		        				</View>
		        				<View style={{flex:1,justifyContent:'center'}}>
		        					<Text style={{color:'#666',fontSize:pxToDp(30)}}>投诉举报</Text>
		        				</View>
		        			</TouchableOpacity>
		        		</View>
		        		<View style={styles.helpRow}>
		        			<TouchableOpacity onPress={()=>this._gotoGovList()} style={styles.helpBtn}>
		        				<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
		        					<View style={{backgroundColor:'#ff8c45',width:pxToDp(100),height:pxToDp(100),borderRadius:pxToDp(50),alignItems:'center',justifyContent:'center'}}>
		        						<Icon name="ios-list-box" size={36} color="#fff" style={{backgroundColor:'transparent'}}/>
		        					</View>
		        				</View>
		        				<View style={{flex:1,justifyContent:'center',paddingRight:pxToDp(10)}}>
		        					<Text style={{color:'#666',fontSize:pxToDp(30)}}>机构名单及联系方式</Text>
		        				</View>
		        			</TouchableOpacity>
		        			<View style={styles.helpBtn}>
		        				<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
		        					<View style={{backgroundColor:'#fff',width:pxToDp(100),height:pxToDp(100),borderRadius:pxToDp(50),alignItems:'center',justifyContent:'center'}}>
		        					</View>
		        				</View>
		        				<View style={{flex:1,justifyContent:'center'}}>
		        				</View>
		        			</View>
		        		</View>
		        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	serviceContainer: {
		flex: 1.7,
		backgroundColor: 'rgba(0,0,0,0.1)'
	},
	serviceRow: {
		flex: 1,
		flexDirection: 'row',
	},
	btn: {
		flex: 1,
		backgroundColor: '#fff',
		marginLeft: 1,
		marginTop: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	helpContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.1)',
		marginTop: pxToDp(30),
		marginBottom: pxToDp(30)
	},
	helpRow: {
		flex: 1,
		flexDirection: 'row'
	},
	helpBtn: {
		flex: 1,
		backgroundColor: '#fff',
		marginLeft: 1,
		marginTop: 1,
		flexDirection: 'row'
	}
});


export default personalService;
