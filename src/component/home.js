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
      message:[],
      data:[],
      news:[]
    }
  }

  componentDidMount(){
    var that = this;
    axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=729&t=2017112216292650424")
    .then(function(response){
      console.log(response.data)
      that.setState({
        message:response.data.ms,
        data:response.data
      })
      

    })
    axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201711299112472160")
    .then(function(response){
      console.log(response.data)
      that.setState({
        news:response.data.hotPoints
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
              <div className='moviename'>{item.tCn}</div>
              {
                item.r>0?
                <span>{item.r}</span>:<div></div>
              }
              
            </Link>
          </div>
        );
      }
     
    })
    var news =this.state.news.map((item, index)=>{
        return (
          <div key={item.id} className="news">
              <img src={item.img} />
              <div>
                <div>{item.title}</div>
                <p>{item.desc}</p>
              </div>
              
          </div>
        );
    })
    return (
      <div className="Home">
          <div className='searchall'>
            <div className="iconfont">大连 &#xe8f7;</div>
            <input type='text' placeholder='影片/影院/影人，任你搜' />
          </div>
          <div className="playinglist">
            <div className="playnow">
              <div>正在热映（{this.state.message.length}部）</div>
            </div>
            {list}
            <div className="playnow play_bottom">
              <div>即将上映（{this.state.data.totalComingMovie}部）</div>
            </div>
          </div>
          <p></p>
          <div className="newslist">
            <div className='hot'>今日热点</div>
            {news}
          </div>
      </div>
    );
  }
}