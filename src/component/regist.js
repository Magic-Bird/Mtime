import React,{Component} from 'react';
import axios from 'axios';
import '../login.css'
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
				<input type="text" placeholder="请输入账号" ref='username'/>
				<input type="password" placeholder="请输入密码" ref='password'/>
				<button className='regist' onClick={()=>this.getuser()}>注册</button>
				<button className='login'><Link to="/login">登陆</Link></button>
			</div>
		)
	}
	getuser(){
		console.log('1111')
      	axios.post("/users/regist",{
      		username:this.refs.username.value,
      		password:this.refs.password.value
     	})
    	.then(function(response){
      		console.log(response)
     

    	})
  	}
	
}