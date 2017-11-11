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

import * as languageAction from '../actions/language';
import {apis} from '../common/config';
import * as config from '../common/config';
import * as tools from '../common/tools';

class PopularPage extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	languages:[],
	  	customThemeViewVisible:false,
	  };
	}
	componentDidMount(){
		// this.props.lang
		var {language,dispatch} = this.props;
		console.log(language,"language");
		
		dispatch(languageAction.load_language());
	}

	renderMoreButton(){

	}
	render(){
		var {theme,language}= this.props;
		// console.log(language,'language')
		var statusBar={
			backgroundColor:theme.styles.themeColor
		}
		// console.log(language.languages,'language.languages',theme.styles.themeColor);
		var content=language.languages.length>0
					?<ScrollableTabView
						tabBarUnderlineColor='red'
						tabBarInactiveTextColor='mintcream'
						tabBarActiveTextColor='white'
						
						ref="scrollableTabView"
						initialPage={0}
						renderTabBar={()=><ScrollableTabBar style={{height:40,borderWidth:0,elevation:2,backgroundColor:theme.styles.themeColor}} tabStyle={{height:39}} underlineHeihgt={2} />}
					>
					{
						language.languages.map((lang,index,arr)=>{
							return <PopularTab tabLabel={lang.name} key={index} {...this.props} ></PopularTab>
						})	
					}
					 </ScrollableTabView>
					:null;
		return (
			<View style={styles.container}>
				<NavigatorBar 
					title="Popular"
					style={theme.styles.navBar}
					rightButton={this.renderMoreButton()}
					statusBar={statusBar}
					hide={false}/>
					{content}
			</View>
			);
	}
}
class PopularTab extends Component{
	constructor(props) {
	  super(props);
	  this.query="?q="+this.props.tabLabel+'&sort=stars';
	  this.fetchUrl=apis.get_repositories+this.query;
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
		tools.get(this.fetchUrl).then((r)=>{
				console.log(r,"rrrr");

				this.setState({
					isLoading:false,
					total_count:r.total_count,
					dataSource:this.state.dataSource.cloneWithRows(r.items)
				});
				var curTime=new Date();
				var result={
					update_at:curTime.getTime()+config.cacheTime,
					items:r.items
				}
				console.log()
				store.save(this.fetchUrl,result);
		 }).catch((err)=>{
		 	console.log(err);
		 });

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
	_renderRow(row){
		// console.log(row);
		return (
			<RepositoryCell 
				key={row.id}
				item={row}
				onSelect={()=>this._onSelectRepository(row)}
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
	listView_container:{
		flex:1,
		backgroundColor:"#f3f3f4"
	},
})
export default PopularPage;