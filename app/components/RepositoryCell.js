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
import global_style from '../common/global_style';
import WebViewPage from '../pages/WebViewPage';

import HTMLView from 'react-native-htmlview';
class RepositoryCell extends Component{
	render(){
		var {item,theme} = this.props;
		// console.log
		let description='<p>'+item.description+'</p>';
		let favoriteButton=<TouchableHighlight style={{padding:6}}>
							<Image
						    ref='favoriteIcon'
						    style={[{width: 22, height: 22,},theme.styles.tabBarSelectedIcon]}
						    source={require('../res/images/ic_unstar_transparent.png')}/>							
						</TouchableHighlight>;
		return (
			<View>
				<TouchableHighlight
					onPress={this.props.onSelect}
					onShowUnderlay={this.props.onHighlight}
					underlayColor="transparent"
					onHideUnderlay={this.props.onUnhighlight}
				>
					<View style={global_style.cell_container}>
						<View style={{flexDirection:'row',justifyContent:'space-between'}}>
							<Text style={styles.title}>
								{item.full_name}
							</Text>
						</View>
						<HTMLView 
							value={description}
							onLinkPress={(url)=>{
								console.log(url);
							}}
							stylesheet={{
							    p:styles.description,
							    a:styles.description,
							}}							
						/>
						<View style={{flexDirection: 'row', justifyContent: 'space-between',height:40}}>
							<View style={{flexDirection:'row',alignItems:'center'}}>
								<Text style={styles.author}>author:</Text>
								<Image  style={{width:22,height:22}} source={{uri:item.owner.avatar_url}} />
							</View>
							<View style={{flexDirection: 'row', alignItems: 'center'}}>
	                            <Text style={styles.author}>Stars: </Text>
	                            <Text style={styles.author}>
	                                {item.stargazers_count}
	                            </Text>
	                        </View>
	                        {favoriteButton}
						</View>						
					</View>
				</TouchableHighlight>
			</View>
			);
	}
}

var styles=StyleSheet.create({
	title:{
		fontSize:16,
		marginBottom:2,
		color:"#212121",
		flex:1
	},
	description:{
		fontSize:14,
		marginBottom:2,
		color:"#757575"
	},
	author:{
		fontSize:14,
		marginBottom:2,
		color:"#757575"
	}
})
export default RepositoryCell;