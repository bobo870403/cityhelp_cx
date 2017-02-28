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
import ActivePage from '../pages/home/active'
class ActiveContainer extends Component {
	render() {
		return (
			<ActivePage {...this.props} />
		);
	}
}

export default connect((state) => {
	const {
		CmsList
	} = state;
	return {
		CmsList
	}
})(ActiveContainer);