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
      message:[]
    }
  }

  componentDidMount(){
    var that = this;
    axios.get("/Service/callback.mi/movie/Detail.api?movieId=227434&locationId=290&t=201711272032526429")
    .then(function(response){
      // console.log(response.data)
      that.setState({
        message:response.data
      })
      

    })
    
  }
  render() {
    console.log(this.state)
    
    return (
      <div className='xiangqing'>
          详情页
          <img src={this.state.message.image}/>
      </div>
    );
  }
}