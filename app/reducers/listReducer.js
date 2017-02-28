import * as types from '../actions/actionTypes';

const initialState = {
    ClassDate: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
    isNoData: false,
};
let listReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CMS_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading,
                isNoData: action.isNoData,
            })
        case types.RECEIVE_CMS_LIST:
            return Object.assign({}, state, {
                datas: action.classList,
                ClassDate: state.isLoadMore ? loadMore(state, action) : refresh(state, action),
                isLoading: false,
                isRefreshing: false,
                isNoData: action.isNoData
            })
        case types.RESET_STATE:
            return Object.assign({}, state, {
                HomeList: [],
                isLoading: true,
            })
        default:
            return state;
    }
}

function refresh(state, action) {
    state.classList = action.classList.data;
    return state.classList;
}

function loadMore(state, action) {
    state.ClassDate = state.ClassDate.concat(action.classList.data);
    return state.ClassDate;
}
export default listReducer;