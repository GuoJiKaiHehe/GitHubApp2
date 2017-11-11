import * as types from './ActionTypes';

export function change_type(theme){
	return {
		type:types.CHANGE_TYPE,
		theme:theme
	}
}