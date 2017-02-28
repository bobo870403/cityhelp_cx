'use strict';
/*
预约活动列表
 */
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import List from '../../component/List'
class bookingActivities extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
			 	<NavBar style={styles.nav} title={'预约活动'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<List navigator={this.props.navigator} sing={'activies'} url={'http://121.41.117.138:8080/cloudidea.portal/activity/getList'}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#f0f0f0'
		backgroundColor: '#eee'
	},
});


export default bookingActivities;
