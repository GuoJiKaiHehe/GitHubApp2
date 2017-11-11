import store from 'react-native-simple-store';
var initialState={
	languages:[],
};
import * as config from '../common/config';
import * as tools from '../common/tools';

store.get("language").then((language)=>{
	if(language && language.push){
		initialState.language=language;
	}else{
		initialState=tools.get_default_checked_language();
console.log(initialState,"initialState");
	}
});
import * as types from '../actions/ActionTypes';

export default function language(state=initialState,action){
	switch(action.type){
		case types.LOAD_LANGUAGE:
			return Object.assign({},state,{
					languages:action.languages		
			});
		default :
			return state;
	}
}
