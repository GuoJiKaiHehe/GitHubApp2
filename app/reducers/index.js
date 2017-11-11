import {combineReducers} from 'redux';

import test from './test';
import theme from './theme';
import language from './language';
export default combineReducers({
	test,
	theme,
	language
});
