import React, {Component} from 'react';

// importer les components personnalisés !
import Navbar from './components/navbar/Navbar';
import Contacts from './components/contact/Contacts';
import AddContact from'./components/contact/AddContact';
import About from'./components/pages/About';

// importer les element du contexte pour le passage des données
import {Provider, Consumer} from './components/context';

// importer le routage des pages
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// importer css
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  // methode render :
  render(){

    /// données 
    let data = "prostam";
    return (
      <Provider className="App">
        <Router>
          <Navbar titre="Contact-list"/>
          <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/contact/add" component={AddContact}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </Router>

      </Provider>
    );
  }
}

export default App;
