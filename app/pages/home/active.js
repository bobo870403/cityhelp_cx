'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import List from '../../component/List'
class active extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
			 	<NavBar style={styles.nav} title={'预约活动'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<List 
					navigator={this.props.navigator} 
					sing={'activies'} 
					url={'http://121.41.117.138:8080/cloudidea.portal/activity/getList'}
					{...this.props}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default active;