import React,{Component} from 'react';
import axios from 'axios'
import '../shopping.css'
import { Carousel } from 'antd';
import ReactDOM from 'react-dom'


export default class Shoping extends Component {
	constructor(){
	  super();
	  this.state={
	    message:[]
	  }
	}
	componentDidMount(){
		
		var that = this;
   		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201711271594013038")
   		.then(function(response){
   		  console.log(response.data)
   		  that.setState({
   		    message:response.data
   		  })
   		  
	
   		})
   		this.shopping();
	}
	shopping(){
	
		ReactDOM.render(
		  <Carousel autoplay>
		    <div><div>1</div></div>
		    <div><div>2</div></div>
		    <div><div>3</div></div>
		    <div><div>4</div></div>
		  </Carousel>
		, this.refs.banner);
	}
	render(){
		return(
			<div ref='banner'>
				
			</div>
		)
	}
}




