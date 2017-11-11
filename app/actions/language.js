import store from 'react-native-simple-store';
import * as types from './ActionTypes';
import * as tools from '../common/tools';
export function load_language(){
	return (dispatch)=>{
		store.get("language").then((langs)=>{
			if(langs){
				dispatch({
					type:types.LOAD_LANGUAGE,
					languages:langs
				});
			}else{
				dispatch({
					type:types.LOAD_LANGUAGE,
					languages:tools.get_default_checked_language()
				});
			}
		});
	}
}


// function 