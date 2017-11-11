import React,{Component} from 'react';

import {
	View,
	Text
} from 'react-native';

import { Provider } from 'react-redux';

import App from './App';
import createStore from './store';
var store=createStore({});

class Root extends Component{
	render(){
		return (
			<Provider store={store}>
				<App />
			</Provider>
			);
	}
}

export default Root;