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
import LifeListPage from '../pages/life/lifeListPage'
class LifeContainer extends Component {
	render() {
		return (
			<LifeListPage {...this.props} />
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
})(LifeContainer);