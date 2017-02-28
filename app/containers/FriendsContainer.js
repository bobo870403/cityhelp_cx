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

import FriendsPage from '../pages/friends/friends'
class FriendsContainer extends Component {
	render() {
		return (
			<FriendsPage {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		Friends
	} = state;
	return {
		Friends
	}
})(FriendsContainer);