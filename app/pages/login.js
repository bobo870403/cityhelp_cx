'use strict';

import React, {
	Component
} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
	StyleSheet,
	View,
	Dimensions,
	TextInput,
	TouchableHighlight,
	Text,
	Image
} from 'react-native';
const {
	height,
	width
} = Dimensions.get('window');
import Toast, {
	DURATION
} from 'react-native-easy-toast'
import NavBar from '../component/navBar'
import HTTPUtil from '../util/HTTPUtil'
import pxToDp from '../util/pxToDp'
import Global from '../component/Global'

var {
	GiftedForm,
	GiftedFormManager
} = require('react-native-gifted-form');

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: null,
			password: null,
		};
	}
	phoneTextChange(text) {
		this.setState({
			phone: text
		})
	}
	passwordTextChange(text) {
		this.setState({
			password: text
		})
	}
	_back() {
		this.props.navigator.pop();
	}
	onPress() {
		// if (!Global.regPhone.test(this.state.phone)) {
		// 	return this.refs.toast.show('手机号不正确')
		// }
		if (!Global.regPassWord.test(this.state.password)) {
			return this.refs.toast.show('密码不正确')
		}
		this._logining();
	}
	_logining() {
		let url = Global.hostip + Global.login;
		var formdata = new FormData();
		formdata.append('userid', this.state.phone);
		formdata.append('password', this.state.password);
		formdata.append('isRemember', true);
		HTTPUtil.post(url, formdata).then((json) => {
			//处理 请求success
			if (json.success) {
				// console.log(json);
				Global.storage.save({
					key: 'loginState',
					rawData: json.data,
				})
				this.refs.toast.show('登录成功');
				this._back();
			} else {
				//处理自定义异常
				// console.warn('异常 ');
				this.refs.toast.show(json.message)
			}
		}, (json) => {
			//TODO 处理请求fail
			console.warn('网络失败:', json);
		})
	}
	render() {
		return (<GiftedForm
            formName='signupForm' // GiftedForm instances that use the same name will also share the same states
            openModal={(route) => {
              this.props.navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
            }}

            clearOnClose={false} // delete the values of the form when unmounted

            defaults={{
              /*
              username: 'Farid',
              'gender{M}': true,
              password: 'abcdefg',
              country: 'FR',
              birthday: new Date(((new Date()).getFullYear() - 18)+''),
              */
            }}

            validators={{
              fullName: {
                title: 'Full name',
                validate: [{
                  validator: 'isLength',
                  arguments: [1, 23],
                  message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                }]
              },
              username: {
                title: 'Username',
                validate: [{
                  validator: 'isLength',
                  arguments: [3, 16],
                  message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                },{
                  validator: 'matches',
                  arguments: /^[a-zA-Z0-9]*$/,
                  message: '{TITLE} can contains only alphanumeric characters'
                }]
              },
              password: {
                title: 'Password',
                validate: [{
                  validator: 'isLength',
                  arguments: [6, 16],
                  message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                }]
              },
              emailAddress: {
                title: 'Email address',
                validate: [{
                  validator: 'isLength',
                  arguments: [6, 255],
                },{
                  validator: 'isEmail',
                }]
              },
              bio: {
                title: 'Biography',
                validate: [{
                  validator: 'isLength',
                  arguments: [0, 512],
                  message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                }]
              },
              gender: {
                title: 'Gender',
                validate: [{
                  validator: (...args) => {
                    if (args[0] === undefined) {
                      return false;
                    }
                    return true;
                  },
                  message: '{TITLE} is required',
                }]
              },
              birthday: {
                title: 'Birthday',
                validate: [{
                  validator: 'isBefore',

                  message: 'You must be at least 18 years old'
                }, {
                  validator: 'isAfter',

                  message: '{TITLE} is not valid'
                }]
              },
              country: {
                title: 'Country',
                validate: [{
                  validator: 'isLength',
                  arguments: [2],
                  message: '{TITLE} is required'
                }]
              },
            }}
          >
						
            <GiftedForm.SeparatorWidget />
            <GiftedForm.TextInputWidget
              name='fullName' // mandatory
              title='Full name'
              placeholder='Marco Polo'
              clearButtonMode='while-editing'
            />
            <GiftedForm.TextInputWidget
              name='username'
              title='Username'
              placeholder='MarcoPolo'
              clearButtonMode='while-editing'
              onTextInputFocus={(currentText = '') => {
                if (!currentText) {
                  let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
                  if (fullName) {
                    return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
                  }
                }
                return currentText;
              }}
            />

            <GiftedForm.TextInputWidget
              name='password' // mandatory
              title='Password'
              placeholder='******'
              clearButtonMode='while-editing'
              secureTextEntry={true}
            />

            <GiftedForm.TextInputWidget
              name='emailAddress' // mandatory
              title='Email address'
              placeholder='example@nomads.ly'
              keyboardType='email-address'
              clearButtonMode='while-editing'
            />

            <GiftedForm.SeparatorWidget />

            <GiftedForm.ModalWidget
              title='Gender'
              displayValue='gender'
            >
              <GiftedForm.SeparatorWidget />

              <GiftedForm.SelectWidget name='gender' title='Gender' multiple={false}>
                <GiftedForm.OptionWidget  title='Female' value='F'/>
                <GiftedForm.OptionWidget title='Male' value='M'/>
              </GiftedForm.SelectWidget>
            </GiftedForm.ModalWidget>

            <GiftedForm.SubmitWidget
              title='Sign up'
              widgetStyles={{
                submitButton: {
                  backgroundColor: "#000",
                }
              }}
              onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                if (isValid === true) {
                  // prepare object
                  values.gender = values.gender[0];
                  values.birthday = moment(values.birthday).format('YYYY-MM-DD');

                  /* Implement the request to your server using values variable
                  ** then you can do:
                  ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
                  ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
                  ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
                  */

                  postSubmit();
                }
              }}

            />

            <GiftedForm.NoticeWidget
              title='By signing up, you agree to the Terms of Service and Privacy Policity.'
            />

            <GiftedForm.HiddenWidget name='tos' value={true} />

          </GiftedForm>);
	}
}
const styles = StyleSheet.create({

});

export default login;
