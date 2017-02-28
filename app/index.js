'use strict';

import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import store from './store/store';

import App from './containers/app';

export default class index extends Component {
  render() {
    return (
      <Provider store = {store} >
          <App />
      </Provider>
    )
  }
}