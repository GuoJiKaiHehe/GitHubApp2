import {
	StyleSheet,
	Dimensions
} from 'react-native';
var {width,height} = Dimensions.get("window");

var styles=StyleSheet.create({
	line: {
	    flex: 1,
	    height: 0.4,
	    opacity:0.5,
	    backgroundColor: 'darkgray',
	},
	cell_container: {
	    flex: 1,
	    backgroundColor: 'white',
	    padding: 10,
	    marginLeft: 5,
	    marginRight: 5,
	    marginVertical: 3,
	    borderColor: '#dddddd',
	    borderStyle: null,
	    borderWidth: 0.5,
	    borderRadius: 2,
	    shadowColor: 'gray',
	    shadowOffset: {width:0.5, height: 0.5},
	    shadowOpacity: 0.4,
	    shadowRadius: 1,
	    elevation:2
	}	
})

export default styles;