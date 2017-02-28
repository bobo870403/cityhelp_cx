'use strict';
//房贷试算
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	SegmentedControlIOS,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	LayoutAnimation,
	WebView
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
import Picker from 'react-native-picker'
import Result from './result'
class roomLoan extends Component {
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
		// LayoutAnimation.spring();
		var renderView;
		if (this.state.selectedIndex == 0) {
			renderView = <Business navigator={this.props.navigator}/>
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
			 	<NavBar style={styles.nav} title={'房贷试算'} isShowLeftButton={1} leftFun={()=>this._back()}/>
			 	<View style={styles.segmentedControl}>
		          <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['商业贷款', '公积金贷款']} selectedIndex={0}/>
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
		// backgroundColor: '#f0f0f0'
		backgroundColor: '#fff'
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: pxToDp(25),
	},
	textStyles: {
		color: '#666',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
	},
	input: {
		flex: 2.5,
		height: pxToDp(73),
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		borderRadius: pxToDp(15),
		paddingLeft:5,
	},
	btn: {
		backgroundColor: '#fd7e2d',
		height: pxToDp(90),
		marginLeft: pxToDp(25),
		marginRight: pxToDp(25),
		borderRadius: pxToDp(15),
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: pxToDp(30),
	}
});

export default roomLoan;

class Business extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

	}
	render() {
		let _js=`
		$('.header').hide();
		$('.hd').hide();
		$('.bottom_menu').hide();
		$('.g_title').hide();
		$('.footer').hide();
		window.onload=function(){
			$('.header').hide();
			$('.hd').hide()
		}`
		return (
			<View style={styles.container}>
					<WebView  style={{
						backgroundColor:'#eee',
						width:width,
					}}
					source={{uri:'http://m.edai.com/jsq/ajfd/'}}
					// startInLoadingState={true}
					// android
					domStorageEnabled={true}
					javaScriptEnabled={true}
					//ios
					bounces={true}
					allowsInlineMediaPlayback={true}
					scrollEnabled={false}
					decelerationRate="normal"
					scalesPageToFit={true}
					injectedJavaScript={_js}
					startInLoadingState={true}
					/>
					<View style={{position:'absolute',bottom:20}}>
						<Text style={styles.textStyles}>相关说明：</Text>
						<Text style={styles.textStyles}>1、商业房贷利率:六个月=4.35%;一年=4.35%;一至三年=4.75%;三至五年=4.75%;五年以上=4.90%</Text>
						<Text style={styles.textStyles}>2、商业贷款贷款利率与银行及贷款人资质相关，仅供参考；</Text>
						<Text style={styles.textStyles}>3、本表利率是贷款基准利率。房贷利率还与借款人资质有关，实际执行利率以银行要求为准。</Text>
					</View>
			</View>
		);
	}
}
class Accumulation extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		let _js=`
		$('.header').hide();
		$('.hd').hide();
		$('.bottom_menu').hide();
		$('.g_title').hide();
		$('.footer').hide();
		window.onload=function(){
			$('.header').hide();
			$('.hd').hide()
		}`
		return (
			<View style={styles.container}>
					<WebView  style={{
						backgroundColor:'#eee',
						width:width,
					}}
					source={{uri:'http://m.edai.com/jsq/gjjjsq/'}}
					// startInLoadingState={true}
					// android
					domStorageEnabled={true}
					javaScriptEnabled={true}
					//ios
					bounces={true}
					allowsInlineMediaPlayback={true}
					scrollEnabled={false}
					decelerationRate="normal"
					scalesPageToFit={true}
					injectedJavaScript={_js}
					startInLoadingState={true}
					/>
					<View style={{position:'absolute',bottom:30}}>
						<Text style={styles.textStyles}>相关说明：</Text>
						<Text style={styles.textStyles}>1、5年（含）以内:2.75%;5年以上:3.25%</Text>
						<Text style={styles.textStyles}>2、商业贷款贷款利率与银行及贷款人资质相关，仅供参考；</Text>
						<Text style={styles.textStyles}>3、本表利率是贷款基准利率。房贷利率还与借款人资质有关，实际执行利率以银行要求为准。</Text>
					</View>
			</View>
		);
	}
}
class Combination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickerBtnName: 'ios-arrow-down',
			isShowPicker:false,
			select:'',
			typeValue : '首套贷款',
			yearValue :'1年',
			pickerData :['首套贷款','二套贷款'],
			type:0,
		};

	}
	_picker(t){
		this.picker.toggle();
		console.log(this.state.typeValue)
		let defaultArr;
		let select;
		switch (t) {
			case 0:
				defaultArr=['首套贷款','二套贷款'];
				select='首套贷款'
				break;
			case 1:
				defaultArr=['1年','2年'];
				select='1年'
				break;
			default:

		}
		if(this.state.isShowPicker){
			this.setState({
				pickerBtnName:'ios-arrow-down',
				isShowPicker:false,
				select : select,
				pickerData:defaultArr,
				type:t,
			})
		}else{
			 this.setState({
				isShowPicker:true,
				select : select,
				pickerData:defaultArr,
				type:t,
			})
		}
	}
	_onPickerDone(v){
		switch (this.state.type) {
			case 0:
				this.setState({
					typeValue:v
				})
				break;
			case 1:
			this.setState({
					yearValue:v
			})
				break;
			default:
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
		        		<View style={styles.textContainer}>
		        			<Text style={styles.textStyles}>公积金贷款:</Text>
		        			<TextInput style={styles.input}/>
		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(5)}]}>万元</Text>
		        		</View>
		        		<View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
		        			<Text style={styles.textStyles}>商业贷款:</Text>
		        			<TextInput style={styles.input}/>
		        			<Text style={[styles.textStyles,{marginLeft:pxToDp(5)}]}>万元</Text>
		        		</View>
		        		<View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
		        			<Text style={styles.textStyles}>贷款类型:</Text>
									<TouchableOpacity onPress={()=>this._picker(0)}
										style={{flex:3.9,height: pxToDp(71),borderWidth: 1,paddingLeft:pxToDp(10),borderColor: 'rgba(0,0,0,0.2)',borderRadius: pxToDp(15),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
										<Text style={{flex:1}}>{this.state.typeValue}</Text>
										<Icon name={this.state.pickerBtnName} size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
									</TouchableOpacity>
		        		</View>
		        		<View style={[styles.textContainer,{marginTop:pxToDp(30)}]}>
		        			<Text style={styles.textStyles}>贷款年限:</Text>
									<TouchableOpacity onPress={()=>this._picker(1)}
										style={{flex:3.9,height: pxToDp(71),borderWidth: 1,paddingLeft:pxToDp(10),borderColor: 'rgba(0,0,0,0.2)',borderRadius: pxToDp(15),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
										<Text style={{flex:1}}>{this.state.yearValue}</Text>
										<Icon name={this.state.pickerBtnName} size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
									</TouchableOpacity>
		        		</View>
		        	</View>
		        	<View style={styles.btn}>
		        		<Text style={{color:'#fff',fontSize:pxToDp(40)}}>计算</Text>
		        	</View>
		        	<View style={[styles.btn,{backgroundColor:'#ccc'}]}>
		        		<Text style={{color:'#fff',fontSize:pxToDp(40)}}>重置</Text>
		        	</View>
		        	<View style={{marginTop:pxToDp(30)}}>
		        		<Text style={styles.textStyles}>相关说明：</Text>
		        		<Text style={styles.textStyles}>1、首套贷款参照基准利率，二套贷款参照1.1倍基准利率；</Text>
		        		<Text style={styles.textStyles}>2、商业贷款贷款利率与银行及贷款人资质相关，仅供参考；</Text>
		        		<Text style={styles.textStyles}>3、组合贷款中的商业性个人住房贷款部分按照个人住房贷款利率执行；公积金贷款部分按照个人住房公积金贷款利率执行</Text>
		        	</View>
							<Picker
								 ref={picker => this.picker = picker}
								 style={{
										 height: 250
								 }}
								 pickerBtnText='确定'
								 pickerCancelBtnText='取消'
								 showDuration={300}
								 showMask={true}
								 pickerData={this.state.pickerData}//picker`s value List
								 selectedValue={this.state.select}//default to be selected value
								 onPickerDone={(v)=>this._onPickerDone(v)}
						 />
			</View>
		);
	}
}
