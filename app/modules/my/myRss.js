'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Dimensions,
  Image,
  Text
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import pxToDp from '../../util/pxToDp'
import NavBar from '../../component/navBar'
import Icon from 'react-native-vector-icons/Ionicons';
class myRss extends Component {
	_back() {
		this.props.navigator.pop();
	}
	render() {
		return (
			<View style={styles.container}>
				<NavBar style={styles.nav} title={'我的订阅'} isShowLeftButton={1} leftFun={()=>this._back()}/>
				<View style={styles.main}>
					<View style={styles.li}>
						<View style={styles.rssTitle}>
							<Text style={styles.rssText}>2016年8月21日</Text>
							<Text style={[styles.rssText,{textAlign:'right',color:'#fd7e2d'}]}>教育服务</Text>
						</View>
						<Image style={styles.img} source={require('../../img/tmp_1.png')}/>
					</View>
          <View style={styles.li}>
            <View style={styles.rssTitle}>
              <Text style={styles.rssText}>2016年8月21日</Text>
              <Text style={[styles.rssText,{textAlign:'right',color:'#fd7e2d'}]}>教育服务</Text>
            </View>
            <Image style={styles.img} source={require('../../img/tmp_2.png')}/>
          </View>
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
	main: {

    backgroundColor:'rgba(0,0,0,0.1)'
	},
  li:{
    backgroundColor:'#fff',
    paddingLeft:pxToDp(35),
    paddingRight:pxToDp(25),
    paddingTop:pxToDp(30),
    paddingBottom:pxToDp(30),
    marginTop:1,
  },
  img:{
    width:pxToDp(679),
    height:pxToDp(155),
    marginTop:pxToDp(25)
  },
  rssTitle:{
    flexDirection:'row'
  },
  rssText:{
    fontSize:16,
    flex:1,
  }
});


export default myRss;
