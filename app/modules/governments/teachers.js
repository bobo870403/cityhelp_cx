'use strict';

import React, {
	Component,

} from 'react';

import {
	StyleSheet,
	View,
	SegmentedControlIOS,
	Text,
	ScrollView,
	Image,
	Dimensions
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import HTTPUtil from '../../util/HTTPUtil'
import NavBar from '../../component/navBar'
import Global from '../../component/Global'
import Icon from 'react-native-vector-icons/Ionicons';
class teachers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			loaded:false,
			datas:null,
		};
		this._onChange = this._onChange.bind(this);
	}

	componentWillMount(){
		this._getData();
	}
	_getData(){

		let url=Global.hostip+Global.govFindService;
		let formdata={
			'id':this.props.route.id,
		}
		HTTPUtil.get(url, formdata).then((json) => {
			//处理 请求success
			if (json.success) {
				 this.setState({
					 datas:json.data,
					 loaded:true,
				 })

			} else {
				//处理自定义异常
				console.warn('异常');
				this.doException(json);
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败',json);
		})
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
			renderView = <BaseInfo data={this.state.datas}/>
		} else if (this.state.selectedIndex == 1) {
			renderView = <Condition data={this.state.datas}/>
		} else if (this.state.selectedIndex == 2) {
			renderView = <Material data={this.state.datas}/>
		} else if (this.state.selectedIndex == 3) {
			renderView = <Flow data={this.state.datas}/>
		} else if(this.state.selectedIndex == 4){
			renderView = <Law data={this.state.datas}/>
		}
		return (
			<ScrollView style={{flex:1}}>
		          {renderView}
		  </ScrollView>
		);
	}
	render() {
		if(!this.state.loaded){
			return null;
		}
		return (
			<View style={styles.container}>
			 	<NavBar style={styles.nav} title={'教室资格认定'} isShowLeftButton={1} leftFun={()=>this._back()}/>
			 	<View style={styles.segmentedControl}>
		          <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['基本信息', '办理条件', '办理材料', '办理流程','法定依据']} selectedIndex={0}/>
		        </View>
		       	<View style={{flex:10}}>
		        	{this._renderContent()}

		        	<View style={styles.btn}>
		        		<Text style={{fontSize:18,color:'#fff'}}>预审批(在线办理)</Text>
		        	</View>
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
	btn: {
		height: pxToDp(90),
		marginLeft: pxToDp(25),
		marginRight: pxToDp(25),
		marginBottom: pxToDp(25),
		borderRadius: pxToDp(15),
		// backgroundColor: '#fd7e2d',
		backgroundColor:'#999',
		justifyContent: 'center',
		alignItems: 'center',
	},
	texts: {
		color: 'rgba(0,0,0,0.5)',
		marginTop: pxToDp(30),
		marginLeft: pxToDp(30),
		marginRight: pxToDp(30)
	}
});
export default teachers;

class BaseInfo extends Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.texts}>权力事项类型：{this.props.data.baseInfo.qlsxlx} </Text>
				<Text style={styles.texts}>权力来源：{this.props.data.baseInfo.qlly} </Text>
				<Text style={styles.texts}>实施机关：{this.props.data.baseInfo.ssjg}</Text>
				<Text style={styles.texts}>奏任处(科)室：{this.props.data.baseInfo.zrks} </Text>
				<Text style={styles.texts}>办事对象：{this.props.data.baseInfo.bsdx}</Text>
				<Text style={styles.texts}>法定期限：{this.props.data.baseInfo.fdqx}</Text>
				<Text style={styles.texts}>承诺期限：{this.props.data.baseInfo.cnqx}</Text>
				<Text style={styles.texts}>咨询电话：{this.props.data.baseInfo.zxdh}</Text>
				<Text style={styles.texts}>监督投诉电话：{this.props.data.baseInfo.jdtsdh}</Text>
				<Text style={styles.texts}>办事地点/时间：{this.props.data.baseInfo.bldd} {this.props.data.baseInfo.blsj}</Text>
			</View>
		);
	}
}
class Condition extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.texts}>
					受理条件： 　　{this.props.data.bltj.sltj}
				</Text>
			</View>
		);
	}
}
class Flow extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Image style={{width:pxToDp(750),height:pxToDp(2674),resizeMode:Image.resizeMode.contain}} source={{uri:this.props.data.bllc.lctFile.fileUrl}}/>

			</ScrollView>
		);
	}
}
class Law extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.texts}>
				　{this.props.data.bltj.flyj}
				</Text>
			</View>
		);
	}
}
class Material extends Component {

	_render(){
		var renderView;
		var list = this.props.data.blcls.map(function(d,key) {
      return renderView =
			<View style={{height:pxToDp(145),marginTop:1,flexDirection: 'row',backgroundColor:'#fff'}}>
				<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
					<Icon name={(d.byx)?"ios-checkmark-circle":"ios-information-circle"} size={pxToDp(90)} color="#fd7e2d" style={{backgroundColor:'transparent'}}/>
					<Text style={{color:'#fd7e2d'}}>{(d.byx)?'必要':'不必要'}</Text>
				</View>
				<View style={{flex:4,justifyContent: 'center',}}>
					<View>
						<Text numberOfLines={1}>{d.clmc}</Text>
					</View>
					<View style={{flexDirection:'row',marginTop:pxToDp(20),alignItems: 'center',}}>
						<Icon name="md-clipboard" size={pxToDp(40)} color="#bfbfbf" style={{backgroundColor:'transparent'}}/>
						<Text style={{color:'#bfbfbf',marginLeft:pxToDp(10)}}>{d.clxs}</Text>
						<Icon name="md-albums" size={pxToDp(40)} color="#bfbfbf" style={{backgroundColor:'transparent',marginLeft:pxToDp(30)}}/>
						<Text style={{color:'#bfbfbf',marginLeft:pxToDp(10)}}>{d.clxxyq}</Text>
					</View>
				</View>
			</View>
    });
		return list
	}


	render() {
		return (
			<View style={[styles.container,{backgroundColor:'rgba(0,0,0,0.1)'}]}>
				{this._render()}
			</View>
		);
	}
}
