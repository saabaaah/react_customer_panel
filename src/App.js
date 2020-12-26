import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Contacts from './components/contact/Contacts';


class App extends Component {

  // methode render :
  render(){

    /// données 
    let data = "prostam";
    return (
      <div className="App">
        <Navbar titre="Contact-list"/>
        <Contacts/>

      </div>
    );
  }
}

export default App;
