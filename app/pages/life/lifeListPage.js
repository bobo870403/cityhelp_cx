'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

import List from '../../component/List'
class lifeListPage extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
			 	<NavBar style={styles.nav} title={(this.props.route.title)?(this.props.route.title):' '} isShowLeftButton={1} leftFun={()=>this._back()}/>
		        <View style={{flex:12}}>
					<List 
						navigator={this.props.navigator} 
						sing={this.props.route.columnAlias} 
						url={'http://121.41.117.138:8080/cloudidea.portal/content/getList'} 
						columnAlias={this.props.route.columnAlias}
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


export default lifeListPage;