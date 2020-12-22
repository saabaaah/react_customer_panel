import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // methode render :
  render(){

    /// données 
    let data = "prostam";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Saying <code>"Hello World"</code> differently!
          </p>
          <a
            className="App-link"
            href="https://prostam.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Prostam :)
          </a>
        </header>
      </div>
    );
  }
}

export default App;
