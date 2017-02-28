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
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	Image,
	ListView,
	ActivityIndicator
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

import VoteDetail from './voteDetail'
import VoteSurvey from './voteSurvey'
class vote extends Component {
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
			//评选
			renderView = <Selection navigator={this.props.navigator}/>
		} else if (this.state.selectedIndex == 1) {
			//调查
			renderView = <Survey navigator={this.props.navigator}/>
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
				<NavBar style={styles.nav} title={'投票评选'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.segmentedControl}>
							<SegmentedControlIOS  onChange={this._onChange} tintColor="#fd7e2d" values={['评选', '调查']} selectedIndex={0}/>
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
		backgroundColor: '#fff'
	},
	segmentedControl: {
		flex: 1.5,
		justifyContent: 'center',
		paddingLeft: pxToDp(25),
		paddingRight: pxToDp(25),
		backgroundColor: '#fff'
	},
});
export default vote;
class Selection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: null,
			loading: true,
		};
	}
	componentWillMount() {
		this._fetchData();
	}
	_fetchData() {
		let url = Global.hostip + Global.getVoteList;
		let formdata = {
			'pageNum': 1,
			'pageSize': 20,
		}

		HTTPUtil.get(url, formdata).then((json) => {
			// console.log(json)
			//处理 请求success
			if (json.success) {
				var ds = new ListView.DataSource({
					rowHasChanged: (r1, r2) => r1 !== r2
				});
				this.setState({
					dataSource: ds.cloneWithRows(json.data),
					loading: false,
				});
			} else {
				//处理自定义异常
				console.warn('异常 ');
				this.doException(json);
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败', json);
		})
	}
	_gotoDetail(data) {
		this.props.navigator.push({
			component: VoteDetail,
			id: data.id
		})
	}
	_renderRow(rowData) {
		let imgurl = Global.defaultImg;
		if (rowData.logoUrl) {
			imgurl = rowData.logoUrl;
		}
		return (<TouchableOpacity onPress={()=>this._gotoDetail(rowData)} style={{height:115,paddingLeft:15,paddingRight:15,flexDirection:'row',alignItems:'center',borderTopColor:'#dcdcdc',borderTopWidth:1,overflow:'hidden'}}>
                      <Image
                        style={{width:95,height:77}}
                        source={{uri:imgurl}}/>
                      <View style={{flex:1,marginLeft:10}}>
                        <Text numberOfLines={1} style={{fontSize:pxToDp(34),color:'#808080'}}>{(rowData.voteTitle)?rowData.voteTitle:'无'}</Text>
                        <Text style={{color:'#fd7e2d'}}>起始时间：<Text style={{color:'#a9a9a9'}}>{(rowData.publishDate)?rowData.publishDate:'无'}</Text> </Text>
                        <Text numberOfLines={2} style={{color:'#fd7e2d'}}>简单介绍：<Text numberOfLines={1} style={{color:'#a9a9a9'}}>{(rowData.summary)?rowData.summary:'无'}</Text> </Text>
                      </View>
        		</TouchableOpacity>)
	}
	render() {
		if (this.state.loading) {
			return (<View style={{marginTop:80,width:80,height:80,backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,justifyContent:'center',alignSelf:'center'}}>
	              <ActivityIndicator
	                style={{alignItems:'center'}}
	                size="small"/>
	              <Text style={{color:'#ffffff',fontSize:12,textAlign:'center',marginTop:5}}>正在加载... </Text>
	        </View>)
		}
		return (
			<View style={styles.container}>
        		        <ListView
				          dataSource={this.state.dataSource}
				          renderRow={this._renderRow.bind(this)}
				          renderSeparator={this._renderSeperator}
				        />
			</View>
		);
	}
}
class Survey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: null,
			loading: true,
		};
	}
	componentWillMount() {
		this._fetchData();
	}
	_fetchData() {
		let url = Global.hostip + Global.getSurveyList;
		let formdata = {
			'pageNum': 1,
			'pageSize': 20,
		}
		HTTPUtil.get(url, formdata).then((json) => {
			// console.log(json)
			//处理 请求success
			if (json.success) {
				var ds = new ListView.DataSource({
					rowHasChanged: (r1, r2) => r1 !== r2
				});
				this.setState({
					dataSource: ds.cloneWithRows(json.data),
					loading: false,
				});
			} else {
				//处理自定义异常
				console.warn('异常 ');
				this.doException(json);
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败', json);
		})
	}
	_gotoDetail() {
		this.props.navigator.push({
			component: VoteSurvey
		})
	}
	_renderRow(rowData) {
		return (<TouchableOpacity onPress={()=>this._gotoDetail()} style={{paddingBottom:15,paddingLeft:15,paddingRight:15,paddingTop:10,backgroundColor:'#fff',marginTop:1}}>
					<Text style={{fontSize:pxToDp(35)}}>{(rowData.surveyTitle)?rowData.surveyTitle:'无标题'}</Text>
					<Text style={{color:'#666',marginTop:5}}>{(rowData.summary)?rowData.summary:'无'}</Text>
					<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:pxToDp(20)}}>
						<Text>会(132)</Text>
							<View style={{width:pxToDp(378),height:pxToDp(43),flexDirection:'row'}}>
								<View style={{backgroundColor:'#fd7e2d',flex:1}}></View>
								<View style={{backgroundColor:'#eee',flex:1}}></View>
							</View>
						<Text>不会(324)</Text>
					</View>
				</TouchableOpacity>)
	}
	render() {
		if (this.state.loading) {
			return (<View style={{marginTop:80,width:80,height:80,backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,justifyContent:'center',alignSelf:'center'}}>
	              <ActivityIndicator
	                style={{alignItems:'center'}}
	                size="small"/>
	              <Text style={{color:'#ffffff',fontSize:12,textAlign:'center',marginTop:5}}>正在加载... </Text>
	        </View>)
		}
		return (
			<View style={[styles.container,{backgroundColor:'rgba(0,0,0,0.1)'}]}>
				 <ListView
				          dataSource={this.state.dataSource}
				          renderRow={this._renderRow.bind(this)}
				          renderSeparator={this._renderSeperator}
				        />
			</View>
		);
	}
}
