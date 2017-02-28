'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');

import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import List from '../../component/List'

export default class news extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
			 	<NavBar style={styles.nav} title={'今日头条'} isShowLeftButton={1} leftFun={()=>this._back()}/>
		        <View style={{flex:12}}>
					    <List 
					    	navigator={this.props.navigator} 
					    	sing={'news'} url={'http://121.41.117.138:8080/cloudidea.portal/content/getList'} 
					    	columnAlias={'xwzx'}
					    	{...this.props}
					    />
		        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0'
	},
});