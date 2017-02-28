/**
 * Created by BOBO on 16/5/25.
 * 根reducer
 */
import {
	combineReducers
} from 'redux';
import Home from './homeReducer';
import CmsList from './listReducer';

export default rootReducer = combineReducers({
	Home,
	CmsList
})