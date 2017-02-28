'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Platform
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class myFavorites extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'我的收藏'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<ScrollView style={styles.sroll} automaticallyAdjustContentInsets={false}>
					<View style={styles.list}>
							<View style={{flexDirection: 'row'}}>
									<Image style={styles.listImg} source={{uri: 'http://p3.pstatp.com/list/c83001118ed6df221ca'}} resizeMode='contain'/>
									<View style={{flex:1,marginLeft:pxToDp(20)}}>
											<Text style={styles.listMute} numberOfLines={2}>70余名中国人撤离南苏丹抵达苏丹首都喀土穆,中国驻苏丹大使馆临时代办 王毅专程前往机场迎接。</Text>
										<View style={{flexDirection:'row'}}>
											<View style={{marginTop:pxToDp(30),justifyContent: 'center',alignItems: 'center'}}>
												<Text style={{color:'#fd7e2d',backgroundColor:'transparent'}}>收藏时间：2016年08月10日</Text>
											</View>
										</View>
									</View>
							</View>
					</View>
					<View style={styles.list}>
							<View style={{flexDirection: 'row'}}>
									<Image style={styles.listImg} source={{uri: 'http://p3.pstatp.com/list/c83001118ed6df221ca'}} resizeMode='contain'/>
									<View style={{flex:1,marginLeft:pxToDp(20)}}>
											<Text style={styles.listMute} numberOfLines={2}>70余名中国人撤离南苏丹抵达苏丹首都喀土穆,中国驻苏丹大使馆临时代办 王毅专程前往机场迎接。</Text>
										<View style={{flexDirection:'row'}}>
											<View style={{marginTop:pxToDp(30),justifyContent: 'center',alignItems: 'center'}}>
												<Text style={{color:'#fd7e2d',backgroundColor:'transparent'}}>收藏时间：2016年08月10日</Text>
											</View>
										</View>
									</View>
							</View>
					</View>
					<View style={styles.list}>
							<View style={{flexDirection: 'row'}}>
									<Image style={styles.listImg} source={{uri: 'http://p3.pstatp.com/list/c83001118ed6df221ca'}} resizeMode='contain'/>
									<View style={{flex:1,marginLeft:pxToDp(20)}}>
											<Text style={styles.listMute} numberOfLines={2}>70余名中国人撤离南苏丹抵达苏丹首都喀土穆,中国驻苏丹大使馆临时代办 王毅专程前往机场迎接。</Text>
										<View style={{flexDirection:'row'}}>
											<View style={{marginTop:pxToDp(30),justifyContent: 'center',alignItems: 'center'}}>
												<Text style={{color:'#fd7e2d',backgroundColor:'transparent'}}>收藏时间：2016年08月10日</Text>
											</View>
										</View>
									</View>
							</View>
					</View>
					<View style={styles.list}>
							<View style={{flexDirection: 'row'}}>
									<Image style={styles.listImg} source={{uri: 'http://p3.pstatp.com/list/c83001118ed6df221ca'}} resizeMode='contain'/>
									<View style={{flex:1,marginLeft:pxToDp(20)}}>
											<Text style={styles.listMute} numberOfLines={2}>70余名中国人撤离南苏丹抵达苏丹首都喀土穆,中国驻苏丹大使馆临时代办 王毅专程前往机场迎接。</Text>
										<View style={{flexDirection:'row'}}>
											<View style={{marginTop:pxToDp(30),justifyContent: 'center',alignItems: 'center'}}>
												<Text style={{color:'#fd7e2d',backgroundColor:'transparent'}}>收藏时间：2016年08月10日</Text>
											</View>
										</View>
									</View>
							</View>
					</View>


				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	main: {

	},
	sroll:{
		// backgroundColor: 'rgba(0,0,0,0.1)'
	},
	list: {
	paddingTop: 12,
	paddingBottom: 12,
	paddingLeft: 5,
	paddingRight: 5,
	backgroundColor: '#fff',
	borderBottomWidth:1,
	borderBottomColor:'rgba(0,0,0,0.1)'
},
listTitle: {
	marginTop: -4,
	lineHeight: 23,
	fontWeight: '400',
	marginBottom: 4,
	letterSpacing: 0.8,
	fontSize: ('ios' == Platform.OS) ? 19 : 17,
	color: ('ios' == Platform.OS) ? '#333' : '#555',
},
listImg: {
	marginLeft: 2,
	marginRight: 2,
	width: (Dimensions.get('window').width - 22) / 3,
	height: (Dimensions.get('window').width - 22) * 10 / 43,
	backgroundColor: '#eeeeee'
},
listMute: {
	fontSize: pxToDp(32),
	color: '#666',
}
});


export default myFavorites;
