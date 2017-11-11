import {
	StyleSheet
} from 'react-native';
import * as config from '../common/config';

var initialState={
	theme:'Default'
};
 // console.log(initialState)
initialState.styles=createTheme(config.ThemeFlags[initialState.theme]);
// console.log(initialState)
export default function theme(state=initialState,action){
	// console.log('3333',state,action);
	var newstate=Object.assign({},state,{
			theme:action.theme||'Default'
		});
	
	   newstate.styles=createTheme(config.ThemeFlags[newstate.theme]);
	   // console.log(newstate,'333');
	return newstate;
	
}
function createTheme(themeFlag) {
    return StyleSheet.create({
            selectedTitleStyle:{
                color: themeFlag
            },
            tabBarSelectedIcon: {
                tintColor: themeFlag
            },
            navBar:{
                backgroundColor:themeFlag,
            },
            themeColor:{
                color:themeFlag
            },

        });
}