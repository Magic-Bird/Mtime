import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'
import logo from '../images/logo_mtime.png'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

export default class Header extends Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div className="header">
				<div className='top'>
					<div className="logo">
						<img src={logo} />
					</div>
					<ul>
						<li><NavLink activeClassName='heightlight' to="/home">首页</NavLink></li>
						<li><NavLink activeClassName='heightlight' to="/ticket">购票</NavLink></li>
						<li><NavLink activeClassName='heightlight' to="/shoping">商城</NavLink></li>
						<li><NavLink activeClassName='heightlight' to="/discovery">发现</NavLink></li>
					</ul>
					<div className='user'><Link to="/login" className='iconfont'>&#xe8c8;</Link></div>
				</div>

				
			</div>
		)
	}
	
}