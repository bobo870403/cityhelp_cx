import * as types from './actionTypes';
import Util from '../common/utils';
import common from '../common/common';
export let cmsList = (isLoading, columnAlias, pageNum, pageSize) => {
	let url = common.hostip + common.getListUri;
	var formdata = new FormData();
	formdata.append('columnAlias', 'xwzx');
	formdata.append('pageNum', 1);
	formdata.append('pageSize', 4);
	return dispatch => {
		return Util.post(url, formdata, (response) => {
			// console.log(response)
			dispatch(feachCmsList(response.data))
		}, (error) => {
			// console.log('加载首页数据error==>' + error);
			// // debugger
			// dispatch(receiveHomeList([]));
		})
	}
}
let feachCmsList = (isLoading) => {
	return {
		type: types.FETCH_CMS_LIST,
		isLoading: isLoading,
	}
}

let receiveCmsList = (homeList) => {
	return {
		type: types.RECEIVE_CMS_LIST,
		homeList: homeList,
	}
}