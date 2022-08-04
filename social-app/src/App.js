import './App.css';
import Facebook from ".components/Facebook";
import React, {Component} from "react";

  class App extends Component{
  render () {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className= "App-title">Facebook Auth Example</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       </header>
    <p className = "App-intro">To get started, authenticate with Facebook.</p>
    <Facebook/>
    </div>
  );
  }
}


export default App;
