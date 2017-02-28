'use strict';
/*
政务服务咨询建议
 */
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	SegmentedControlIOS,
	TextInput,
	Picker,
	PickerIOS,
	TouchableOpacity,
	ScrollView
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

class talkThingsOver extends Component {
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
			renderView = <Inquire/>
		} else if (this.state.selectedIndex == 1) {
			renderView = <Suggest/>
		}
		return (
			<ScrollView style={{flex:10,paddingLeft:pxToDp(25),paddingRight:pxToDp(25)}}>
							{renderView}
			</ScrollView>
		);
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'咨询建议'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.segmentedControl}>
					<SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['咨询', '建议']} selectedIndex={0}/>
				</View>
					{this._renderContent()}
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
		flex: 1,
		justifyContent: 'center',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
		backgroundColor: '#fff'
	},
	inquireLi: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: pxToDp(30)
	},
	inputText: {
		// width:pxToDp(504),
		flex: 1,
		fontSize:pxToDp(26),
		height: pxToDp(71),
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.1)',
		borderRadius: pxToDp(10),
		paddingLeft: 3
	},
	btn: {
		height: pxToDp(90),
		borderRadius: pxToDp(15),
		backgroundColor: '#fd7e2d',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: pxToDp(30)
	},
	valBtn: {
		marginLeft: pxToDp(20),
		flex: 1,
		backgroundColor: '#fd7e2d',
		height: pxToDp(72),
		borderRadius: pxToDp(10),
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default talkThingsOver;

var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

var PickerItemIOS = PickerIOS.Item;
class Inquire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 0,
			carMake: 'cadillac',
      modelIndex: 3,
			pickerHeight:pxToDp(0),
			pickerOpacity:0,
			pickerBtnName:'ios-arrow-down',
			isShowPicker:false
		};

	}
	_picker(){
		if(this.state.isShowPicker){
			this.setState({
						pickerHeight:pxToDp(0),
						pickerOpacity:0,
						pickerBtnName:'ios-arrow-down',
						isShowPicker:false})
		}else{
			 this.setState({
				pickerHeight:pxToDp(400),
				pickerOpacity:1,
				pickerBtnName:'ios-arrow-up',
				isShowPicker:true})
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inquireLi}>
					<Text>咨询单位：</Text>
					<TouchableOpacity onPress={()=>this._picker()}
						style={{flex:1,height: pxToDp(71),borderWidth: 1,paddingLeft:pxToDp(10),borderColor: 'rgba(0,0,0,0.1)',borderRadius: pxToDp(10),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
						<Text style={{flex:1}}>{this.state.carMake}</Text>
						<Icon name={this.state.pickerBtnName} size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
				</View>
				<PickerIOS
					style={{height:this.state.pickerHeight,opacity:this.state.pickerOpacity}}
					selectedValue={this.state.carMake}
					onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
					{Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
						<PickerItemIOS
							key={carMake}
							value={carMake}
							label={CAR_MAKES_AND_MODELS[carMake].name}
						/>
					))}
				</PickerIOS>
				<View style={styles.inquireLi}>
					<Text>咨询标题：</Text>
					<TextInput placeholder={'最多输入50个字符'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>咨询内容：</Text>
					<TextInput multiline={true} placeholder={'最多输入200个字符'} style={[styles.inputText,{height:pxToDp(241)}]}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>你的姓名：</Text>
					<TextInput placeholder={'王老五'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>手机号码：</Text>
					<TextInput placeholder={'输入12位手机号码'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>验  证  码：</Text>
					<TextInput placeholder={'4位验证码'} style={styles.inputText}/>
					<View style={styles.valBtn}><Text style={{color:'#fff',backgroundColor:'transparent'}}>发送验证码</Text></View>

				</View>
				<View style={styles.btn}>
		        		<Text style={{fontSize:18,color:'#fff'}}>提交</Text>
		    </View>

      </View>
		);
	}
}
class Suggest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 0,
			carMake: 'cadillac',
			modelIndex: 3,
			pickerHeight:pxToDp(0),
			pickerOpacity:0,
			pickerBtnName:'ios-arrow-down',
			isShowPicker:false
		};

	}
	_picker(){
		if(this.state.isShowPicker){
			this.setState({
						pickerHeight:pxToDp(0),
						pickerOpacity:0,
						pickerBtnName:'ios-arrow-down',
						isShowPicker:false})
		}else{
			 this.setState({
				pickerHeight:pxToDp(400),
				pickerOpacity:1,
				pickerBtnName:'ios-arrow-up',
				isShowPicker:true})
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inquireLi}>
					<Text>建议单位：</Text>
					<TouchableOpacity onPress={()=>this._picker()}
						style={{flex:1,height: pxToDp(71),borderWidth: 1,paddingLeft:pxToDp(10),borderColor: 'rgba(0,0,0,0.1)',borderRadius: pxToDp(10),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
						<Text style={{flex:1}}>{this.state.carMake}</Text>
						<Icon name={this.state.pickerBtnName} size={30} color="#999" style={{marginLeft:pxToDp(20),marginRight:pxToDp(25),backgroundColor:'transparent'}}/>
					</TouchableOpacity>
				</View>
				<PickerIOS
					style={{height:this.state.pickerHeight,opacity:this.state.pickerOpacity}}
					selectedValue={this.state.carMake}
					onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
					{Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
						<PickerItemIOS
							key={carMake}
							value={carMake}
							label={CAR_MAKES_AND_MODELS[carMake].name}
						/>
					))}
				</PickerIOS>
				<View style={styles.inquireLi}>
					<Text>建议标题：</Text>
					<TextInput placeholder={'最多输入50个字符'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>建议内容：</Text>
					<TextInput multiline={true} placeholder={'最多输入200个字符'} style={[styles.inputText,{height:pxToDp(241)}]}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>你的姓名：</Text>
					<TextInput placeholder={'王老五'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>联系方式：</Text>
					<TextInput placeholder={'王老五'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>手机号码：</Text>
					<TextInput placeholder={'输入12位手机号码'} style={styles.inputText}/>
				</View>
				<View style={styles.inquireLi}>
					<Text>验  证  码：</Text>
					<TextInput style={styles.inputText}/>
					<View style={styles.valBtn}><Text style={{color:'#fff',backgroundColor:'transparent'}}>发送验证码</Text></View>

				</View>
				<View style={styles.btn}>
		        		<Text style={{fontSize:18,color:'#fff'}}>提交</Text>
		        </View>
      </View>
		);
	}
}
