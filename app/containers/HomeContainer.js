import React,{Component} from 'react';

import {connect} from 'react-redux';

import {
	Text,
} from 'react-native';

import HomePage from '../pages/HomePage';

class HomeContainer extends Component{

	render(){
		return <HomePage {...this.props} />
	}
}
var mapStateToProps=function(state){
		var {theme} = state;
	return {
		theme
	};
}
export default connect(mapStateToProps)(HomeContainer);