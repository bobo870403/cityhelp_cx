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
import CloudPayPage from '../pages/pay/cloudPay'
class CloudPayContainer extends Component {
	render() {
		return (
			<CloudPayPage {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		CloudPay
	} = state;
	return {
		CloudPay
	}
})(CloudPayContainer);