import React,{Component} from 'react';

import {connect} from 'react-redux';

import {
	Text,
} from 'react-native';

import MyPage from '../pages/MyPage';

class MyContainer extends Component{

	render(){
		return <MyPage {...this.props} />
	}
}
var mapStateToProps=function(state){
	var {theme,language} = state;
	return {
		theme,
		language
	};
}
export default connect(mapStateToProps)(MyContainer);