import React,{Component} from 'react';
import axios from 'axios'
import '../shopping.css'
import { Carousel } from 'antd';
import ReactDOM from 'react-dom'


export default class Shoping extends Component {
	constructor(){
	  super();
	  this.state={
	    message:[],
	    nav:[],
	    topic:[]
	  }
	}
	componentDidMount(){
		
		var that = this;
   		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201711271594013038")
   		.then(function(response){
   		  console.log(response.data)
   		  that.setState({
   		    message:response.data,
   		    nav:response.data.navigatorIcon,
   		    topic:response.data.topic
   		  })
   		  
	
   		})
   		this.shopping();
	}
	shopping(){
	
		// ReactDOM.render(
		  
		// , this.refs.banner);
	}
	render(){
		// console.log(this.state.message.scrollImg)
		if(this.state.message.scrollImg){
			var list =this.state.message.scrollImg.map((item, index)=>{
		      
		        return (
		          <div key={item.url} className='sliderimg'>
		              
		              <img src={item.image} />
		            
		          </div>
		        );
		      
     
    		})	
		}
		if(this.state.nav){
			var nav =this.state.nav.map((item, index)=>{
		        return (
		          <div key={item.url} className='nav_list'>
		              <img src={item.image} />
		              <div>{item.iconTitle}</div>
		          </div>
		        );
    		})	
		}
		var topic=this.state.topic.map((item,index)=>{
			return(
				
					<div className='topic_nav' key={item.titleCn}>
						<img src={item.checkedImage}/>
					</div>
				
			)
		})		
		return(
			<div ref='banner'>
				<Carousel autoplay>
		  		  {list}
		  		</Carousel>
		    	<div className='nav'>
		    		{nav}
		    	</div>
		    	<p></p>
		    	<div className='topic'>
		    		{topic}
		    	</div>		  		
			</div>
		)
	}
}




