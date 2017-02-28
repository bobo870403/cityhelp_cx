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
import pxToDp from '../../util/pxToDp'
import Edu from './education'
import TalkThingsOver from './talkThingsOver'
import Complain from './Complain'
import GovList from './govList'
import Buttons from '../../component/Buttons'
class Department extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	_onPressButton(id,t) {
		this.props.navigator.push({
			component: Edu,
			title:t,
      id:id,
      department:true,
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
	_gotoGovList() {
		this.props.navigator.push({
			component: GovList,
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.serviceContainer}>
		        		<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('abcdefg','经信委')} text={'经信委'} iconName={'ios-brush-outline'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('dsj','地税局')} text={'地税局'} iconName={'ios-people-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('fgw','发改委')} text={'发改委'} iconName={'ios-card'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('zjj','住建局')} text={'住建局'} iconName={'ios-home-outline'} colors={'#fd7e2d'}/>

		        		</View>
		        		<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('ghj','规划局')} text={'规划局'} iconName={'ios-bus-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('gaj','公安局')} text={'公安局'} iconName={'ios-person-outline'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('sfj','司法局')} text={'司法局'} iconName={'ios-albums-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('jtysj','交通运输局')} text={'交通运输局'} iconName={'ios-medkit-outline'}/>

		        		</View>
		        		<View style={styles.serviceRow}>
									<Buttons type={1} _onPress={()=>this._onPressButton('hbj','环保局')} text={'环保局'} iconName={'ios-brush-outline'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('fr','fr_cbgd','市场监管局')} text={'市场监管局'} iconName={'ios-people-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('scjdj')} text={'农业局'} iconName={'ios-people-outline'} colors={'#fd7e2d'}/>
									<Buttons type={1} _onPress={()=>this._onPressButton('lyj','林业局')} text={'林业局'} iconName={'ios-people-outline'} colors={'#fd7e2d'}/>
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


export default Department;
