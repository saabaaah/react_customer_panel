import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';

class App extends Component {

  // methode render :
  render(){

    /// données 
    let data = "prostam";
    return (
      <div className="App">
        <h1>Liste des contacts : </h1>
        <Navbar titre="Contact-list"/>
        <Navbar />
        <Contact/>
        <Contact nom="sabah HM" tel ="123456" email="saabaaah@email"/>
        <Contact nom="yassine KH" tel ="01234556" email="yacine.k@email"/>
        <Contact nom="mani HM" tel ="987654321" email="mani.hm@email"/>
      </div>
    );
  }
}

export default App;
