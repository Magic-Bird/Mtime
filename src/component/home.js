import React,{Component} from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


export default class Home extends Component {
  constructor(){
    super();
    this.state={
      message:[]
    }
  }

  componentDidMount(){
    var that = this;
    axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2017112216292650424")
    .then(function(response){
      console.log(response.data.ms)
      that.setState({
        message:response.data.ms
      })
      

    })
    
  }
  render() {
    console.log(this.state.message.length)
    var list =this.state.message.map((item, index)=>{
      if(index<8){
        return (
          <div key={item.id} >
            <Link to={"/xiangqing/"+ item.id} >
              <img src={item.img} />
              <div>{item.tCn}</div>
              <span>{item.r}</span>
            </Link>
          </div>
        );
      }
     
    })
    return (
      <div className="Home">
          <div className='searchall'>
            <div>大连</div>
            <input type='text' placeholder='影片/影院/影人，任你搜' />
          </div>
          <div className="playinglist">
            <div className="playnow">
              <div>正在热映（{this.state.message.length}部）</div>
            </div>
            {list}
          </div>
      </div>
    );
  }
}