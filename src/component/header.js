import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'
import logo from '../images/logo_mtime.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Header extends Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div className="header">
				<div className="logo">
					<img src={logo} />
				</div>
				<ul>
					<li><Link to="/">首页</Link></li>
					<li><Link to="/ticket">购票</Link></li>
					<li><Link to="/">商城</Link></li>
					<li><Link to="/">发现</Link></li>
				</ul>
			</div>
		)
	}
	
}