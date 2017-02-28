import * as types from './actionTypes';
import Util from '../common/utils';
import common from '../common/common';
export let cmsList = (urlString, columnAlias, pageNum, pageSize, isNoData, isLoadMore, isRefreshing, isLoading) => {
	let url = urlString;
	var formdata = new FormData();
	formdata.append('columnAlias', columnAlias);
	formdata.append('pageNum', pageNum);
	formdata.append('pageSize', pageSize);
	return dispatch => {
		dispatch(feachCmsList(isNoData, isLoadMore, isRefreshing, isLoading));
		return Util.post(url, formdata, (response) => {
			var isExistData = (response.data.length == 0) ? true : false;
			dispatch(receiveCmsList(response, isExistData));
		}, (error) => {
			console.log('error==>' + error);
			// debugger
			dispatch(receiveCmsList([]));
		})
	}
}
let feachCmsList = (isNoData, isLoadMore, isRefreshing, isLoading) => {
	return {
		type: types.FETCH_CMS_LIST,
		isLoadMore: isLoadMore,
		isRefreshing: isRefreshing,
		isLoading: isLoading,
		isNoData: isNoData,
	}
}

let receiveCmsList = (response, isExistData) => {
	return {
		type: types.RECEIVE_CMS_LIST,
		classList: response,
		isNoData: isExistData,
	}
}