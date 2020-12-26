import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
class App extends Component {

  // methode render :
  render(){

    /// données 
    let data = "prostam";
    return (
      <div className="App">
        <h1>Liste des contacts : </h1>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
      </div>
    );
  }
}

export default App;
