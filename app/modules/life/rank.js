'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	ScrollView,
	Image,
	Text
} from 'react-native';
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class rank extends Component {

	_back() {
		this.props.navigator.pop()
	}
	render() {
		return (
			<View style={styles.container}>
						<NavBar style={styles.nav} title={'封神榜'} isShowLeftButton={1} leftFun={()=>this._back()}/>
						<ScrollView>
							<View style={styles.sing}>
								<Image style={styles.singImg} source={require('../../img/r1.png')}/>
								<View style={{alignItems: 'center',justifyContent: 'center',}}>
									<Text style={styles.singText}>1.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>2.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>3.XX小吃一条街足浴店探秘小吃小吃</Text>
								</View>
							</View>
							<View style={styles.sing}>
								<Image style={styles.singImg} source={require('../../img/r1.png')}/>
								<View style={{alignItems: 'center',justifyContent: 'center',}}>
									<Text style={styles.singText}>1.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>2.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>3.XX小吃一条街足浴店探秘小吃小吃</Text>
								</View>
							</View>
							<View style={styles.sing}>
								<Image style={styles.singImg} source={require('../../img/r1.png')}/>
								<View style={{alignItems: 'center',justifyContent: 'center',}}>
									<Text style={styles.singText}>1.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>2.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>3.XX小吃一条街足浴店探秘小吃小吃</Text>
								</View>
							</View>
							<View style={styles.sing}>
								<Image style={styles.singImg} source={require('../../img/r1.png')}/>
								<View style={{alignItems: 'center',justifyContent: 'center',}}>
									<Text style={styles.singText}>1.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>2.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>3.XX小吃一条街足浴店探秘小吃小吃</Text>
								</View>
							</View>
							<View style={styles.sing}>
								<Image style={styles.singImg} source={require('../../img/r1.png')}/>
								<View style={{alignItems: 'center',justifyContent: 'center',}}>
									<Text style={styles.singText}>1.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>2.XX小吃一条街足浴店探秘小吃小吃</Text>
									<Text style={styles.singText}>3.XX小吃一条街足浴店探秘小吃小吃</Text>
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
		backgroundColor: '#f0f0f0'
	},
	sing: {
		height: pxToDp(269),
		backgroundColor: '#fbfcfd',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 1
	},
	singImg: {
		width: pxToDp(224),
		height: pxToDp(224)
	},
	singText: {
		fontSize: pxToDp(30),
		// marginTop: pxToDp(-10),
		lineHeight: pxToDp(60),
		marginLeft: pxToDp(10),
		color: '#666'
	}
})


export default rank;