import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './component/header';
import Home from './component/home';
import Ticket from './component/ticket';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       message:[]
//     }
//   }

//   componentDidMount(){
//     var that = this;
//     axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2017112216292650424")
//     .then(function(response){
//       console.log(response.data.ms)
//       that.setState({
//         message:response.data.ms
//       })
      

//     })
    
//   }
//   render() {
//     console.log(this.state.message.length)
//     var list =this.state.message.map((item, index)=>{
//       if(index<8){
//         return (
//           <div key={item.id} >
              
//               <img src={item.img} />
//               <div>{item.tCn}</div>
            
//           </div>
//         );
//       }
     
//     })
//     return (
//       <div className="App">
//         <Router>
//           <Header />
//           <Route exact path="/" component={Home}/>
//           <Route path="/ticket" component={Ticket}/>
         
//           <div className="playinglist">
//             <div className="playnow">
//               <div>正在热映（{this.state.message.length}部）</div>
//             </div>
//             {list}
//           </div>
//         </Router> 
//       </div>
//     );
//   }
// }

const App = () => (
  // constructor(){
  //   super();
  //   this.state={
  //     message:[]
  //   }
  // },

  <Router>

    <div>
      <Header/>

      <Route exact path="/" component={Home}/>
      <Route path="/ticket" component={Ticket}/>
      
    </div>
  </Router>
)
export default App