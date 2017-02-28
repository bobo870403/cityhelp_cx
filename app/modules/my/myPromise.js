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
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class myPromise extends Component {
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
			// renderView = <NowHandle/>
		} else if (this.state.selectedIndex == 1) {
			// renderView = <FinishHandle navigator={this.props.navigator}/>
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
		        <NavBar style={styles.nav} title={'我的预约'} isShowLeftButton={1} leftFun={()=>this._back()}/>
		        <View style={styles.segmentedControl}>
		              <SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['成功预约', '历时预约']} selectedIndex={0}/>
		        </View>
		        <ScrollView style={{backgroundColor: '#fff'}}>
		          	<TouchableOpacity activeOpacity={0.4} style={{backgroundColor:'#fff'}}>
                  <View style={{height:115,paddingLeft:15,paddingRight:15,flexDirection:'row',alignItems:'center',borderTopColor:'#dcdcdc',borderTopWidth:1,overflow:'hidden'}}>
                      <Image
                        style={{width:95,height:77}}
                        source={{uri:'http://p0.so.qhmsg.com/sdr/674_900_/t01064f89521f130090.jpg'}}/>
                      <View style={{flex:1,marginLeft:10}}>
                        <Text numberOfLines={1} style={{fontSize:pxToDp(34),color:'#808080'}}>长兴县博物馆</Text>
                        <Text style={{color:'#a9a9a9'}}>时间：2016年1月1日</Text>
                        <Text style={{color:'#a9a9a9'}}>地   址：天津滨海-</Text>
                        <Text style={{color:'#a9a9a9'}}>价   格 : 60-390 </Text>
                        <Text style={{color:'#a9a9a9'}}>参与方式 : 预约购票 </Text>
                      </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={{backgroundColor:'#fff'}}>
                  <View style={{height:115,paddingLeft:15,paddingRight:15,flexDirection:'row',alignItems:'center',borderTopColor:'#dcdcdc',borderTopWidth:1,overflow:'hidden'}}>
                      <Image
                        style={{width:95,height:77}}
                        source={{uri:'http://p0.so.qhmsg.com/sdr/674_900_/t01064f89521f130090.jpg'}}/>
                      <View style={{flex:1,marginLeft:10}}>
                        <Text numberOfLines={1} style={{fontSize:pxToDp(34),color:'#808080'}}>长兴县博物馆</Text>
                        <Text style={{color:'#a9a9a9'}}>时间：2016年1月1日</Text>
                        <Text style={{color:'#a9a9a9'}}>地   址：天津滨海-</Text>
                        <Text style={{color:'#a9a9a9'}}>价   格 : 60-390 </Text>
                        <Text style={{color:'#a9a9a9'}}>参与方式 : 预约购票 </Text>
                      </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={{backgroundColor:'#fff'}}>
                  <View style={{height:115,paddingLeft:15,paddingRight:15,flexDirection:'row',alignItems:'center',borderTopColor:'#dcdcdc',borderTopWidth:1,overflow:'hidden'}}>
                      <Image
                        style={{width:95,height:77}}
                        source={{uri:'http://p0.so.qhmsg.com/sdr/674_900_/t01064f89521f130090.jpg'}}/>
                      <View style={{flex:1,marginLeft:10}}>
                        <Text numberOfLines={1} style={{fontSize:pxToDp(34),color:'#808080'}}>长兴县博物馆</Text>
                        <Text style={{color:'#a9a9a9'}}>时间：2016年1月1日</Text>
                        <Text style={{color:'#a9a9a9'}}>地   址：天津滨海-</Text>
                        <Text style={{color:'#a9a9a9'}}>价   格 : 60-390 </Text>
                        <Text style={{color:'#a9a9a9'}}>参与方式 : 预约购票 </Text>
                      </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4} style={{backgroundColor:'#fff'}}>
                  <View style={{height:115,paddingLeft:15,paddingRight:15,flexDirection:'row',alignItems:'center',borderTopColor:'#dcdcdc',borderTopWidth:1,overflow:'hidden'}}>
                      <Image
                        style={{width:95,height:77}}
                        source={{uri:'http://p0.so.qhmsg.com/sdr/674_900_/t01064f89521f130090.jpg'}}/>
                      <View style={{flex:1,marginLeft:10}}>
                        <Text numberOfLines={1} style={{fontSize:pxToDp(34),color:'#808080'}}>长兴县博物馆</Text>
                        <Text style={{color:'#a9a9a9'}}>时间：2016年1月1日</Text>
                        <Text style={{color:'#a9a9a9'}}>地   址：天津滨海-</Text>
                        <Text style={{color:'#a9a9a9'}}>价   格 : 60-390 </Text>
                        <Text style={{color:'#a9a9a9'}}>参与方式 : 预约购票 </Text>
                      </View>
                  </View>
                </TouchableOpacity>
		        </ScrollView>
		      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor:'#fff'
	},
	segmentedControl: {
		backgroundColor: '#fff',
		paddingLeft: pxToDp(30),
		paddingRight: pxToDp(30),
		paddingTop: pxToDp(40),
		paddingBottom: pxToDp(40)
	},
});


export default myPromise;
