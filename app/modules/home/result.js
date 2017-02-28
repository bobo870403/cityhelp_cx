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
class result extends Component {
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
			renderView = <Business datas={this.props.route.dArr1}/>
		} else if (this.state.selectedIndex == 1) {
			renderView = <Accumulation/>
		} else if (this.state.selectedIndex == 2) {
			renderView = <Combination />
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
			 	<NavBar style={styles.nav} title={'试算结果'} isShowLeftButton={1} leftFun={()=>this._back()}/>
			 	<View style={styles.segmentedControl}>
		          <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['等额本息', '等额本金']} selectedIndex={0}/>
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
		height: pxToDp(105),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: pxToDp(25),
		backgroundColor: '#fff',
		marginTop: 1
	},
	textStyles: {
		flex: 1,
		color: '#666',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
	},
	textStyles_t1: {

		color: '#666',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
	},
});

export default result;

class Business extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View>
		        		<View style={styles.textContainer}>
		        			<Text style={styles.textStyles}>贷款金额:</Text>

		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(305)}]}>{Math.ceil(this.props.datas[2])}元</Text>
		        		</View>
		        		<View style={[styles.textContainer]}>
		        				<Text style={styles.textStyles}>贷款年限:</Text>

		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(305)}]}>{this.props.datas[3]}年</Text>
		        		</View>
		        		<View style={[styles.textContainer]}>
							<Text style={styles.textStyles}>年 利 率:</Text>

		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(305)}]}>{this.props.datas[4]}%/年</Text>
		        		</View>
		        		<View style={[styles.textContainer]}>
							<Text style={styles.textStyles}>每月月供:</Text>

		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(305)}]}>{Math.ceil(this.props.datas[0])}元</Text>
		        		</View>
		        		<View style={[styles.textContainer]}>
								<Text style={styles.textStyles}>总 利 息:</Text>

		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(305)}]}>{Math.ceil(this.props.datas[1])}元</Text>
		        		</View>

		        	</View>
		        	<View style={{marginTop:1,backgroundColor:'#fff',flex:1,paddingTop:pxToDp(20)}}>
		        		<Text style={styles.textStyles_t1}>相关说明：</Text>
		        		<Text style={styles.textStyles_t1}>1、首套贷款参照基准利率，二套贷款参照1.1倍基准利率；</Text>
		        		<Text style={styles.textStyles_t1}>2、商业贷款贷款利率与银行及贷款人资质相关，仅供参考；</Text>
		        		<Text style={styles.textStyles_t1}>3、组合贷款中的商业性个人住房贷款部分按照个人住房贷款利率执行；公积金贷款部分按照个人住房公积金贷款利率执行</Text>
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
