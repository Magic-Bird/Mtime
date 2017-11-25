import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'
import logo from '../images/logo_mtime.png'

export default class header extends Component {
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
					<li>首页</li>
					<li>购票</li>
					<li>商城</li>
					<li>发现</li>
				</ul>
			</div>
		)
	}
	
}