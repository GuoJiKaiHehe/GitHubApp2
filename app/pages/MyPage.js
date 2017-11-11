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
    ScrollView
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


class MyPage extends Component{
	render(){
		var {theme} = this.props;
		return (
				<View style={{flex:1}}>
					<NavigatorBar 
						title="My"
						style={theme.styles.navBar}
						statusBar={statusBar}
						hide={false}/>				
					<ScrollView>
						
					</ScrollView>
				</View>
			);
	}
}

export default MyPage;