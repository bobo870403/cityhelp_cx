import * as types from './actionTypes';
import Util from '../common/utils';
import common from '../common/common';
export let home = (isLoading) => {
	let url = common.hostip + common.getListUri;
	var formdata = new FormData();
	formdata.append('columnAlias', 'xwzx');
	formdata.append('pageNum', 1);
	formdata.append('pageSize', 4);
	return dispatch => {
		return Util.post(url, formdata, (response) => {
			// console.log(response)
			dispatch(receiveHomeList(response.data))
		}, (error) => {
			// console.log('加载首页数据error==>' + error);
			// // debugger
			// dispatch(receiveHomeList([]));
		})
	}
}
let feachHomeList = (isLoading) => {
	return {
		type: types.FETCH_HOME_LIST,
		isLoading: isLoading,
	}
}

let receiveHomeList = (homeList) => {
	return {
		type: types.RECEIVE_HOME_LIST,
		homeList: homeList,
	}
}