import React,{Component} from 'react';
import axios from 'axios'
import '../discovery.css'
import lazyload from 'react-lazyload'


export default class Discovery extends Component {
  	constructor(){
  	  super();
  	  this.state={
  	    message:[],
		view:[]
  	  }
  	}
	
  	componentDidMount(){
 	
 	
	
  	  var that = this;
  	  axios.get(`Service/callback.mi/News/NewsList.api?t=2017112912443373702&pageIndex=1`)
  	  .then(function(response){
  	    // console.log(response.data)
  	    that.setState({
  	      message:response.data.newsList
	
  	    })
  	    
	
  	  })
   	  axios.get(`Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2017112913395668253`)
  	  .then(function(response){
  	    console.log(response.data.news)
  	    that.setState({
  	      view:response.data.news
	
  	    })
  	    
	
  	  })
	
  	  
  	}	
	render(){
		var news=this.state.message.map((item,index)=>{
			return(
				<div key={item.id} className="list">
					{
						item.type===1?
						<div className='type1'>
							<div>{item.title}</div>
							<img src={item.images[0].url1} />
							<img src={item.images[1].url1} />
							<img src={item.images[2].url1} />
						</div>
						:<div className='typeo'>
							<img src={item.image} />
							<div>{item.title}</div>
						</div>
					}
					
				</div>
			)
		})
		return(
			<div>
				<div className='dis_top'>
					<img src={this.state.view.imageUrl}/>
					<span>{this.state.view.title}</span>
				</div>
				{news}
			</div>
		)
	}
	
}