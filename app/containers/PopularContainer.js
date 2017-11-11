import React,{Component} from 'react';

import {connect} from 'react-redux';

import {
	Text,
} from 'react-native';

import PopularPage from '../pages/PopularPage';

class PopularContainer extends Component{

	render(){
		return <PopularPage {...this.props} />
	}
}
var mapStateToProps=function(state){
	var {theme,language} = state;
	return {
		theme,
		language
	};
}
export default connect(mapStateToProps)(PopularContainer);