'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	SegmentedControlIOS,
	Text,
	TextInput
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class EmergencyNotice extends Component {
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
	_back() {
		this.props.navigator.pop();
	}
	_renderContent() {
		var renderView;
		if (this.state.selectedIndex == 0) {
			renderView = <Business/>
		} else if (this.state.selectedIndex == 1) {
			renderView = <Accumulation/>
		} else if (this.state.selectedIndex == 2) {
			// renderView = <Combination />
		} else if (this.state.selectedIndex == 3) {
			// renderView = <Combination />
		}
		return (
			<View style={{flex:1}}>
		          {renderView}
		    </View>
		);
	}
	render() {
		return (
			<View style={styles.container}>
			 	<NavBar style={styles.nav} title={'应急通知'} isShowLeftButton={1} leftFun={()=>this._back()}/>
			 	<View style={styles.segmentedControl}>
		          <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['最新', '预警','通知','提示']} selectedIndex={0}/>
		        </View>
		        <View style={{flex:12}}>
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
			// backgroundColor: '#fff'
	},
	segmentedControl: {
		flex: 1.5,
		justifyContent: 'center',
		// marginTop: pxToDp(22),
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
		backgroundColor: '#fff'
	},
	textContainer: {
		justifyContent: 'center',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
		paddingTop:pxToDp(30),
		paddingBottom:pxToDp(30),
		backgroundColor: '#fff',
		marginTop: 1
	},
	textStyles: {
		height:pxToDp(38),
		color: '#666',
	},
	textIcon:{
		color: '#999',
	},
	textStyles_t1: {
		marginLeft:3,
		fontSize:pxToDp(26),
		color: '#999',
	},
});

export default EmergencyNotice;

class Business extends Component {
	render() {
		return (
			<View style={styles.container}>

		        <View style={styles.textContainer}>
		        	<Text style={styles.textStyles}>浙江湖州长兴县农业局召开农业抗雪防冻应急工作会议</Text>
		        	<View style={{flexDirection:'row',alignItems:'center'}}>
								<Icon name="ios-time-outline" size={16} style={styles.textIcon}/>
								<Text style={styles.textStyles_t1}>发布时间：2016年8月8日</Text>
							</View>
		        </View>

						<View style={styles.textContainer}>
		        	<Text style={styles.textStyles}>降雨仍再持续 长兴一企业车间进水被迫停工</Text>
		        	<View style={{flexDirection:'row',alignItems:'center'}}>
								<Icon name="ios-time-outline" size={16} style={styles.textIcon}/>
								<Text style={styles.textStyles_t1}>发布时间：2016年8月8日</Text>
							</View>
		        </View>

						<View style={styles.textContainer}>
		        	<Text style={styles.textStyles}>浙江湖州长兴县农业局召开农业抗雪防冻应急工作会议</Text>
		        	<View style={{flexDirection:'row',alignItems:'center'}}>
								<Icon name="ios-time-outline" size={16} style={styles.textIcon}/>
								<Text style={styles.textStyles_t1}>发布时间：2016年8月8日</Text>
							</View>
		        </View>

						<View style={styles.textContainer}>
		        	<Text style={styles.textStyles}>浙江湖州长兴县农业局召开农业抗雪防冻应急工作会议</Text>
		        	<View style={{flexDirection:'row',alignItems:'center'}}>
								<Icon name="ios-time-outline" size={16} style={styles.textIcon}/>
								<Text style={styles.textStyles_t1}>发布时间：2016年8月8日</Text>
							</View>
		        </View>

						<View style={styles.textContainer}>
		        	<Text style={styles.textStyles}>浙江湖州长兴县农业局召开农业抗雪防冻应急工作会议</Text>
		        	<View style={{flexDirection:'row',alignItems:'center'}}>
								<Icon name="ios-time-outline" size={16} style={styles.textIcon}/>
								<Text style={styles.textStyles_t1}>发布时间：2016年8月8日</Text>
							</View>
		        </View>

						<View style={styles.textContainer}>
		        	<Text style={styles.textStyles}>浙江湖州长兴县农业局召开农业抗雪防冻应急工作会议</Text>
		        	<View style={{flexDirection:'row',alignItems:'center'}}>
								<Icon name="ios-time-outline" size={16} style={styles.textIcon}/>
								<Text style={styles.textStyles_t1}>发布时间：2016年8月8日</Text>
							</View>
		        </View>
		 </View>
		);
	}
}
class Accumulation extends Component {
	render() {
		return (
			<View style={styles.container}>

			</View>
		);
	}
}
