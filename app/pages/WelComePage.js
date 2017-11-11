import React,{Component} from 'react';

import {
	Text,
	InteractionManager
} from 'react-native';

import HomeContainer from '../containers/HomeContainer';

class WelComePage extends Component{
	componentDidMount(){

		var {navigator} = this.props;
		/*this.timer=setTimeout(()=>{
			console.log("333");
		});*/
		this.timer=setTimeout(()=>{
			console.log("333");
			InteractionManager.runAfterInteractions(()=>{
				navigator.resetTo({
					component:HomeContainer,
					name:"homepage",
					params:{
							
					}
				});

			});
		},500);
	}
	componentWillUnmount(){

		this.timer && clearTimeout(this.timer);
	}
	render(){
		return (
			<Text>WelComePage</Text>
			);
	}
}

export default WelComePage;