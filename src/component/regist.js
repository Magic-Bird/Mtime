import React,{Component} from 'react';
import axios from 'axios'


export default class Regist extends Component {
	getuser(){
     axios.post("/users/regist",{
      username:'tan',
      password:'123',
      email:'123@123'
     })
    .then(function(response){
      console.log(response)
     

    })
  }
	render(){
		return(
			<div>
				注册
			</div>
		)
	}
	
}