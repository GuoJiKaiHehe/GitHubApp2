import React,{Component} from 'react';

import {connect} from 'react-redux';

import {
	Text,
} from 'react-native';

import TrendingPage from '../pages/TrendingPage';

class TrendingContainer extends Component{

	render(){
		return <TrendingPage {...this.props} />
	}
}
var mapStateToProps=function(state){
	var {language,theme}= state;
	return {
		language,
		theme
	};
}
export default connect(mapStateToProps)(TrendingContainer);