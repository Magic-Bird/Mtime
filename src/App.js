import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './component/header';

export default class App extends Component {
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
    // console.log(this)
    var list =this.state.message.map((item, index)=>{
      return (
        <div key={item.id} >
            
            <img src={item.img} />
            <h2>{item.tCn}</h2>
          
        </div>
      );
    })
    return (
      <div className="App">
        <Header />
        <div className="playinglist">
          {list}
        </div>
        
      </div>
    );
  }
}


