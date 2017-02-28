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
import NewsPage from '../pages/home/news'

class NewsContainer extends Component {
	render() {
		return (
			<NewsPage {...this.props} />
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
})(NewsContainer);
