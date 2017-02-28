'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	SegmentedControlIOS
} from 'react-native';

import pxToDp from '../util/pxToDp'
import NavBar from '../component/navBar'

import Ps from './personalService'
import Pq from './progressQuery'
import Ls from './governments/legalPersonServer'
import Dp from './governments/Department'
class government extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedIndex: 0
		};
		this._onChange = this._onChange.bind(this);
	}
	_onChange(event) {
		this.setState({
			selectedIndex: event.nativeEvent.selectedSegmentIndex,
		});
	}
	_renderContent() {
		var renderView;
		if (this.state.selectedIndex == 0) {
			renderView = <Ps navigator={this.props.navigator}/>;
		} else if (this.state.selectedIndex == 1) {
			renderView = <Ls navigator={this.props.navigator}/>;
		} else if (this.state.selectedIndex == 2) {
			renderView = <Pq />
		} else if (this.state.selectedIndex == 3) {
			renderView = <Dp navigator={this.props.navigator}/>
		}
		return (
			<View style={{flex:1}}>
            {renderView}
          </View>
		);
	}
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'政务服务'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.segmentedControl}>
		          <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['个人服务', '法人服务', '办事进度查询', '部门查询']} selectedIndex={0}/>
		        </View>
		        <View style={{flex:10}}>
		        	{this._renderContent()}
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
	nav: {
		flex: 1
	},
	segmentedControl: {
		flex: 1.5,
		justifyContent: 'center',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
		backgroundColor: '#fff'
	},
});


export default government;
