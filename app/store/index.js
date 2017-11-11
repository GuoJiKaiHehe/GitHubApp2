import {createStore,applyMiddleware} from "redux";
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

var middlewares=[];

middlewares.push(logger);

middlewares.push(thunk);
const middlewaresCreators = applyMiddleware(...middlewares)(createStore)



export default function create_store(initialState={}){
	var store=middlewaresCreators(rootReducer,initialState);
	return store;
}