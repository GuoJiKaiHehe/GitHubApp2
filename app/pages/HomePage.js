import React,{Component} from 'react';



import {
	Text,
	View,
	StyleSheet,
	Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import PopularContainer from '../containers/PopularContainer'
import TrendingContainer from '../containers/TrendingContainer'
import FavoriteContainer from '../containers/FavoriteContainer'
import MyContainer from '../containers/MyContainer'
import * as config from '../common/config';
import * as themeActions from '../actions/theme';
export var FLAG_TAB = {
    flag_popularTab: 'flag_popularTab', flag_trendingTab: 'flag_trendingTab',
    flag_favoriteTab: 'flag_favoriteTab', flag_myTab: 'flag_myTab'
}

class HomePage extends Component{
	constructor(props) {
	  super(props);
	  let selectedTab = this.props.selectedTab ? this.props.selectedTab : FLAG_TAB.flag_myTab;
	  this.state = {
	  	selectedTab:selectedTab
	  };
	}
	componentDidMount(){
		console.log(this.props.theme);
		var {dispatch} = this.props;
		// dispatch(themeActions.change_type("Lime"))
					
	}
	_onSelected(selectedTab){
		// console.log(selectedTab);
		this.setState({
			selectedTab:selectedTab
		})
	}
	_renderTab(Component,selectedTab,title,renderIcon){
		var theme= this.props.theme;
		console.log(theme,'mythmeme');
		return (
				<TabNavigator.Item
					selected={this.state.selectedTab==selectedTab}
					title={title}
					selectedTitleStyle={theme.styles.selectedTitleStyle}
					renderIcon={()=><Image style={styles.tabBarIcon} source={renderIcon} />}

					renderSelectedIcon={() => <Image
	                    style={[styles.tabBarSelectedIcon, theme.styles.tabBarSelectedIcon]}
	                    source={renderIcon}/>}					
					onPress={()=>this._onSelected(selectedTab)}
				>
					<Component {...this.props}  homeComponent={this}/>
				</TabNavigator.Item>
			);	
	}
	render(){
		
		return (
			<View style={styles.container}>
				<TabNavigator
					tabBarStyle={{opacity:0.9}}
					sceneStyle={{paddingBottom:0}}
				>
					{this._renderTab(PopularContainer,FLAG_TAB.flag_popularTab,'Popular',require("../res/images/ic_polular.png"))}
					{this._renderTab(TrendingContainer,FLAG_TAB.flag_trendingTab,'Trending',require("../res/images/ic_trending.png"))}
					{this._renderTab(FavoriteContainer, FLAG_TAB.flag_favoriteTab, 'Favorite', require('../res/images/ic_favorite.png'))}
                    {this._renderTab(MyContainer, FLAG_TAB.flag_myTab, 'My', require('../res/images/ic_my.png'))}
				</TabNavigator>
			</View>	
			);
	}
}
var styles=StyleSheet.create({
	container:{
		flex:1
	},
	tabBarIcon:{
		width:26,
		height:26,
		resizeMode:"contain"
	},
	tabBarSelectedIcon:{
		width:26,
		height:26,
		resizeMode:"contain"
	}
})
export default HomePage