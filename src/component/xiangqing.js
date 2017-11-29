import React,{Component} from 'react';
import axios from 'axios';
import '../xiangqing.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



export default class Xiangqing extends Component {
  constructor(){
    super();
    this.state={
      message:[],
      _type:[],
      classN:[]
    }
  }

  componentDidMount(){
 
 

    var that = this;
    axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.Mid}&locationId=290&t=201711272032526429`)
    .then(function(response){
      // console.log(response.data)
      that.setState({
        message:response.data,
        _type:response.data.type,
      })
      

    })

    
  }
  render() {
    // console.log(this.state.message)
    // console.log(this)
    var list =this.state._type.map((item, index)=>{   
        return (
          <div key="index" >
              {item}/
          </div>
        );   
    })
    var sectionStyle = {
      width: "100%",
      backgroundImage: `url(${this.state.message.image})` 
    };
    return (
      <div className='xiangqing'>
          <div className='bgimg' style={sectionStyle}>

          </div>
          <div className='titleimg'></div>
          <img src={this.state.message.image}/>
          <div className='name'>{this.state.message.titleCn}</div>
          <div className='ename'>{this.state.message.titleEn}</div>
          <div className='content'>{this.state.message.content}</div>
          {
            this.state.message.rating>0?
            <div className='rating'>{this.state.message.rating}</div>:<div></div>
          }
          
          <div className='runtime'>{this.state.message.runTime}</div>
          <div className='type'>{list}</div>
          <div className='com'>{this.state.message.commonSpecial}</div>          
          <div className='button'>查影讯/购票</div>
      </div>
    );
  }
}



