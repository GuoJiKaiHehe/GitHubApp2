import React,{Component} from 'react';

import {connect} from 'react-redux';

import {
	Text,
} from 'react-native';

// import PopularContainer from '../pages/PopularContainer';

class FavoriteContainer extends Component{

	render(){
		return <Text>23232</Text>
	}
}
var mapStateToProps=function(state){

	return {
	};
}
export default connect(mapStateToProps)(FavoriteContainer);