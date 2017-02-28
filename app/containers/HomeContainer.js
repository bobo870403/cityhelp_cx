'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import {
	connect
} from 'react-redux';
import Home from '../pages/home/home';
class HomeContainer extends Component {
	render() {
		return (
			<Home {...this.props} />
		);
	}
}
export default connect((state) => {
	const {
		Home
	} = state;
	return {
		Home
	}
})(HomeContainer);