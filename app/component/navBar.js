'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	StatusBar
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import pxToDp from '../util/pxToDp'
import Icon from 'react-native-vector-icons/Ionicons'
class navBar extends Component {
	render() {
		const titleConfig = {
			title: this.props.title || 'No title',
			tintColor: '#fff',
			style:{fontFamily:'FZXiYuan-M01S'}
		};

		const leftButtonConfig = <TouchableOpacity onPress={this.props.leftFun} style={{flex:1,justifyContent:'center',alignItems: 'center',flexDirection: 'row',paddingLeft:pxToDp(10)}}><Icon
                  name='ios-arrow-back-outline'
                  size={pxToDp(60)}
                  color='#fff'
                  style={{width:pxToDp(40),height:pxToDp(60)}}/>
                  	<Text style={{color:'#fff',}}>返回</Text>
                  </TouchableOpacity>;
		const rightButtonConfig = <TouchableOpacity onPress={this.props.rightFun} style={{flex:1,justifyContent:'center',alignItems: 'center',flexDirection: 'row',paddingLeft:pxToDp(10)}}><Icon
							    name='ios-arrow-back-outline'
							    size={pxToDp(60)}
							    color='#666'
							    style={{width:pxToDp(40),height:pxToDp(60)}}/>
							      <Text style={{color:'#fff',fontFamily:'FZXiYuan-M01S'}}>{(this.props.rightText)?this.props.rightText:' '}</Text>
							    </TouchableOpacity>;
		return (
			<NavigationBar
		      	style={styles.navStyle}
		        title={titleConfig}
						statusBar={{style:'light-content',tintColor:'#fd7e2d'}}
		        leftButton={(this.props.isShowLeftButton)?leftButtonConfig:<View/>}
						rightButton={(this.props.isShowRightButton)?rightButtonConfig:<View/>}
		        >

			</NavigationBar>
		);
	}
}

const styles = StyleSheet.create({
	navStyle: {
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,0.1)',
		backgroundColor:'#fd7e2d'
	}
});


export default navBar;
