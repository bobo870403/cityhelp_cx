'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  SegmentedControlIOS,
  Dimensions,
  TextInput,
  PickerIOS,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';

const infoText='本栏目是为方便个人和法人监督政府工作效能而提供的投诉渠道，有关部门负责答复相关问题。一、受理范围：本栏目接受个人、法人对各政府部门行政审批工作效能、工作态度的投诉。二、处理时间：一般信件要求在7个工作日内办结；情况复杂的，可以适当延长办理期限，但延长期限不得超过10个工作日。法律法规对办理时限另有规定的，从其规定。三、请勿重复提交投诉。如果您重复提交，我们将只受理您若干投诉中的一个。四、不属于本栏目受理范围的问题视为无效问题，本栏目管理人员有权对此删改并不再告知。五、对各政府部门办事过程中有关法规、政策、程序等问题的咨询请向“咨询建议”栏目提交.'
var PickerItemIOS = PickerIOS.Item;

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

class Complain extends Component {

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
  _back() {
    this.props.navigator.pop();
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
  _submit(){
    Alert.alert(
            '温馨提示',
            infoText,
            [
              {text: '我知道了', onPress: () => console.log('Foo Pressed!')},
            ]
          )
  }
  render() {
    return (
      <View style={styles.container}>
				<NavBar style={styles.nav} title={'投诉举报'} isShowLeftButton={1} leftFun={()=>this._back()}/>
        <View style={styles.container}>
          <View style={styles.inquireLi}>
            <Text>投诉部门：</Text>
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
            <Text>投诉标题：</Text>
            <TextInput placeholder={'最多输入50个字符'} style={styles.inputText}/>
          </View>
          <View style={styles.inquireLi}>
            <Text>投诉内容：</Text>
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
          <TouchableOpacity onPress={()=>this._submit()} style={styles.btn}>
                  <Text style={{fontSize:18,color:'#fff'}}>提交</Text>
          </TouchableOpacity >
        </View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
	  paddingLeft:pxToDp(25),
    paddingRight:pxToDp(25),
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


export default Complain;
