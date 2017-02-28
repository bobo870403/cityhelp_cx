'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import HomeContainer from './HomeContainer'
import MoreContainer from './MoreContainer';
import CloudPayContainer from './CloudPayContainer'
import FriendsContainer from './FriendsContainer'
import TabNavigator from 'react-native-tab-navigator';
const tabBarItems = [{
	title: '首页',
	iconName: 'ios-home-outline',
	selectedIconName: 'ios-home',
	component: HomeContainer
}, {
	title: '云支付',
	iconName: 'ios-cloud-circle-outline',
	selectedIconName: 'ios-cloud-circle',
	component: CloudPayContainer
}, {
	title: '朋友群',
	iconName: 'ios-chatbubbles-outline',
	selectedIconName: 'ios-chatbubbles',
	component: FriendsContainer
}, {
	title: '更多',
	iconName: 'ios-keypad-outline',
	selectedIconName: 'ios-keypad',
	component: MoreContainer
}, ]
export default class TabBarView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: tabBarItems[0].title,
		};
	}
	render() {
		return (
			<TabNavigator tabBarStyle={{ height: 50 }}>
	          	{
	          		tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                titleStyle={{color:"#ff9933"}}
                                selectedTitleStyle={{color:"#ff9933"}}
                                renderIcon={()=><Icon name={controller.iconName} size={25} color="#ff9933" />}
                                renderSelectedIcon={()=><Icon name={controller.selectedIconName} size={25} color="#ff9933"/>}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component style={{margingTop:150}} navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
	          	}
	        </TabNavigator>
		);
	}
}