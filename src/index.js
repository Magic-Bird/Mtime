import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'


const reducers=(state,action)=>{
	switch(action.type){
		case "ADD_TODO":
			var newState = Object.assign({},state);
			newState.list.push(action.payload);
			return newState;
	} 
		
}
const store = createStore(reducers,{list:[]})
function renderPage(){
	ReactDOM.render(<App store={store} />, document.getElementById('root'));

}
renderPage();
store.subscribe( renderPage)
registerServiceWorker();
