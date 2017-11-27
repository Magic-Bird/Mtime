import React,{Component} from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


export default class Regist extends Component {

	render(){
		return(
			<div>
				注册页
				<input type="text" placeholder="请输入账号" />
				<input type="password" placeholder="请输入密码" />
				<button onClick={()=>this.getuser()}>注册</button>
				<button><Link to="/login">登陆</Link></button>
			</div>
		)
	}
	getuser(){
		console.log('1111')
      	axios.post("/users/regist",{
      	username:'tan',
      	password:'123'
     })
    .then(function(response){
      console.log(response)
     

    })
  }
	
}