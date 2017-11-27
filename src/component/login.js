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
					<input type="text" placeholder="请输入账号" />
					<input type="password" placeholder="请输入密码" />
					<button>登陆</button>
					<button><Link to="/regist">注册</Link></button>

				</div>
			</div>
		)
	}
	
}