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

import MorePage from '../pages/mores/more'

class MoreContainer extends Component {
	render() {
		return (
			<MorePage {...this.props}/>
		);
	}
}
export default connect((state) => {
	const {
		More
	} = state;
	return {
		More
	}
})(MoreContainer);

export default MoreContainer;