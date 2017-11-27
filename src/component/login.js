import React,{Component} from 'react';
import axios from 'axios'
import '../login.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



export default class Login extends Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<div>
					登陆页
					<input type="text" placeholder="请输入账号" ref='username'/>
					<input type="password" placeholder="请输入密码" ref='password'/>
					<button className='login' onClick={()=>this.getuser()}>登陆</button>
					<button className='regist'><Link to="/regist">注册</Link></button>

				</div>
			</div>
		)
	}
	getuser(){
		console.log('1111')
      	axios.post("/users/login",{
      		username:this.refs.username.value,
      		password:this.refs.password.value
     	})
    	.then(function(response){
      		console.log(response)
     

    	})
  	}	
	
}