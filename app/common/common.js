/**
 * Created by BOBO on 17/2/10.
 */
import {
	Dimensions
} from 'react-native';
let window = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
}
export default {
	hostip: 'http://121.41.117.138:8080/cloudidea.portal/',
	getListUri: 'content/getList',
	window: window,
}