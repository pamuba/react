import React from 'react';
import { Component } from 'react'
import './App.css';
import A from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'



class App extends Component{
  render(){
    return (
          <div className="App">

          <UserGreeting></UserGreeting>

          {/* <ParentComponent></ParentComponent> */}

          {/* <EventBind></EventBind> */}


          {/* <Message></Message>
          <Counter></Counter> */}

           {/* <h3>Hello World from CLASS</h3>
           <A name="Clark" heroName="Superman">
             <p>This is the children props</p>
           </A>
           <A name="Bruce" heroName="Batman">
             <button>Action</button>
           </A>
           <A name="Diana" heroName="Wonder Women">

           </A>

          <Welcome name="Clark" heroName="Superman">
            <p>This is the children props</p>
          </Welcome>
          <Welcome name="Bruce" heroName="Batman"></Welcome>
          <Welcome name="Diana" heroName="Wonder Women"></Welcome> */}
          </div>
        );
  }
}
export default App;
