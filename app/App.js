import React,{Component} from 'react';

import {
	Text
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import WelComePage from './pages/WelComePage';

export default class App extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	_renderScene(route,navigator){
		var Component=route.component;
			return (
					<Component {...route.params} navigator={navigator} />
				);
	}
	render(){
		return (
			<Navigator
				initialRoute={{
					name:"welcomepage",
					component:WelComePage
				}}
				renderScene={(e,i)=>this._renderScene(e,i)}
			/>
			)
	}
}