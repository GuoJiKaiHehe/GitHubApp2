/**
 * WebViewPage
 * @flow
 **/
'use strict'
import React, {Component} from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    WebView,
    Platform,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import NavigatorBar from '../components/NavigatorBar'
// import GlobalStyles from '../../res/styles/GlobalStyles'
// import ViewUtils from '../util/ViewUtils'
const WEBVIEW_REF = 'webview';

const TRENDING_URL = 'https://github.com/'
export default class WebViewPage extends Component {
    constructor(props) {
        super(props);
         var url = this.props.item.html_url ? this.props.item.html_url
            : TRENDING_URL + this.props.item.fullName;
		var title = this.props.item.full_name ? this.props.item.full_name
            : this.props.item.fullName;            
        this.state = {
            url: url,
            canGoBack: false,
            title: title,
        }
    }

   

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }
    _BackPress(e){
    	if(this.state.canGoBack){
    		this.refs[WEBVIEW_REF].goBack();
    	}else{
    		this.props.navigator.pop();
    	}
    }
	_renderLeftButton(){
		return (
				<TouchableOpacity
	            style={{padding:8}}
	            onPress={()=>this._BackPress()}>
	            <Image
	                style={{width: 26, height: 26,}}
	                source={require('../res/images/ic_arrow_back_white_36pt.png')}/>
	        </TouchableOpacity>
			);
	}
    render() {
    	var {theme} = this.props;
        return (
            <View style={styles.listView_container}>
                <NavigatorBar
                    navigator={this.props.navigator}
                    popEnabled={false}
                    style={theme.styles.navBar}
                    leftButton={this._renderLeftButton()}
                    title={this.state.title}
                />
                <WebView
                    ref={WEBVIEW_REF}
                    startInLoadingState={true}
                    onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listView_container:{
    	flex:1,
    	backgroundColor:"#f3f3f4"
    }
})
