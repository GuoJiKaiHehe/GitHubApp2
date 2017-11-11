'use strict';
import React, {Component} from 'react'
import {
    ListView,
    StyleSheet,
    RefreshControl,
    TouchableHighlight,
    Text,
    Image,
    View,
} from 'react-native'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import store from 'react-native-simple-store';

import NavigatorBar from '../components/NavigatorBar';
import RepositoryCell from '../components/RepositoryCell';
import RepositoryDetail from '../pages/RepositoryDetail';
import Trending from 'GitHubTrending'
import * as languageAction from '../actions/language';
import {apis} from '../common/config';
import * as config from '../common/config';
import * as tools from '../common/tools';
import TrendingRepoCell from '../components/TrendingRepoCell';
class TrendingPage extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	componentDidMount(){
		this.props.dispatch(languageAction.load_language());
	}
	renderTitleView(){
		return (
			<View>
				<TouchableHighlight
					ref="button"
					underlayColor="transparent"
				>
					<View style={{flexDirection:"row",alignItems:'center'}}>
						<Text style={{
		                        fontSize: 18,
		                        color: '#FFFFFF',
		                        fontWeight: '400'
		                    }}>
							Trending
						</Text>
						<Image style={{width:12,height:12,marginLeft:5}}  source={require('../res/images/ic_spinner_triangle.png')} />
					</View>
				</TouchableHighlight>
			</View>
			);
	}
	render(){
		var {language,theme}= this.props;
		console.log(language,"trendingtablang")
		let content=language.languages.length>0
					?<ScrollableTabView
						tabBarUnderlineColor='#e7e7e7'
						tabBarInactiveTextColor='mintcream'
						tabBarActiveTextColor='white'	
						ref="scrollableTabView"
						initialPage={0}
						renderTabBar={() => <ScrollableTabBar style={{height:40,borderWidth:0,elevation:2,backgroundColor:theme.styles.themeColor}} tabStyle={{height:39}} underlineHeihgt={2} />}
					>
					{
						language.languages.map((lang,index,arr)=>{
							return <TrendingTab key={index} tabLabel={lang.name} {...this.props} />
						})
					}
					</ScrollableTabView>
					:null;
		var statusBar={
		    backgroundColor:theme.styles.themeColor,
		}					
		return (
			<View  style={styles.container}>
				<NavigatorBar 
					style={theme.styles.navBar}
					statusBar={statusBar}
					titleView={this.renderTitleView()}
				/>
				{content}
			</View>
			);
	}
}

class TrendingTab extends Component{
	constructor(props) {
	  super(props);
	  // this.query="?q="+this.props.tabLabel+'&sort=stars';
	  this.fetchUrl=apis.get_trendings+this.props.tabLabel+'?since=daily';
	  var dataSource=new ListView.DataSource({
	  	rowHasChanged:(row1,row2)=>row1!==row2
	  });
	  this.state = {
	  	isLoading:true,
	  	total_count:0,
	  	items:[],
	  	dataSource:dataSource
	  };
	}
	componentDidMount(){
		// console.log()
		this.trending=new Trending();

		this.getListViewData(); 
	}
	async getListViewData(isRefresh){
		this.setState({
			isLoading:true,
		});
		
		
		var  result=await store.get(this.fetchUrl);
		console.log(result);
		if(result){
			var curTime=new Date();
			console.log(curTime.getTime());
			if(result.update_at>curTime.getTime()){
				console.log("is get cache");
				this.setState({
					isLoading:false,
					dataSource:this.state.dataSource.cloneWithRows(result.items)
				});	
				return;					
			}	
		}
		this.trending.fetchTrending(this.fetchUrl).then((items)=>{
			if(items){
				this.setState({
					isLoading:false,
					dataSource:this.state.dataSource.cloneWithRows(items)
				});
				var curTime=new Date();
				var result={
					update_at:curTime.getTime()+config.cacheTime,
					items:items
				}	
				store.save(this.fetchUrl,result);			
			}else{
				console.log("nothing")
			}
		});
		/*
		tools.get(this.fetchUrl).then((r)=>{
				console.log(r,"rrrr");

				
				var curTime=new Date();
				var result={
					update_at:curTime.getTime()+config.cacheTime,
					items:r.items
				}
				console.log()
				store.save(this.fetchUrl,result);
		 }).catch((err)=>{
		 	console.log(err);
		 });*/

	}
	_onRefresh(){
		// console.log("onRefresh");
		this.getListViewData(true);
	}
	_onSelectRepository(item){
		console.log("点击了该仓库",item)
		this.props.navigator.push({
		    title: item.full_name,
		    component: RepositoryDetail,
		    params: {
		        item: item,
		        parentComponent: this,
		        ...this.props
		    },
		});		
	}
	_renderRow(item){
		let {navigator}=this.props;
		// onFavorite={(item, isFavorite)=>this.onFavorite(item, isFavorite)}
        return (
            <TrendingRepoCell
                key={item.fullName}
                onSelect={()=>this._onSelectRepository(item)}
                item={item}
                {...this.props}
               />
        );
	}
	render(){
		var {theme,language} = this.props;
		return (
				<View style={[styles.listView_container]}>
					<ListView
						ref="listView"
						renderRow={(row)=>this._renderRow(row)}
						renderFooter={()=><View style={{height:50}} />}
						enableEmptySections={true}
						dataSource={this.state.dataSource}
						refreshControl={
							<RefreshControl 
							refreshing={this.state.isLoading}
							onRefresh={()=>this._onRefresh()}
							title="loading..."
							
							/>
						}
					/>
				</View>
			);
	}
}

var styles=StyleSheet.create({
	container:{
		flex:1
	},
	ListView:{

	}
});

export default TrendingPage;