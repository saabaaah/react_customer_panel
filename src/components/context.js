import React, { Component } from 'react'

// importer la librairie axios pour recevoir les requeste https 
import axios from 'axios';

// definir le context
const Context = React.createContext();

// definir un reducer
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter( (contact) =>contact.id !== action.payload)
            }
        
        case 'ADD_CONTACT':
            return {
                contacts: [...state.contacts, action.payload]
            }
        
        case 'EDIT_CONTACT':
            return {
                contacts: state.contacts.map( contact => contact.id === action.payload.id ? contact = action.payload : contact)
            }
        
        default :
            return state;
    }
}
export class Provider extends Component {

    // créer les attributs
    state = {
        contacts: [
            {id: 1, nom: "Sabah HM", tel: "123456789", email:"saabaaah@email"},
            {id: 2, nom: "yassine KH", tel: "00123456", email:"yacine.kh@email"},
            {id: 3, nom: "Mani HM", tel: "123456789", email:"mani.hm@email"},
            {id: 4, nom: "Sarah HM", tel: "123456789", email:"sarah.hm@email"},
            {id: 5, nom: "Houda HM", tel: "123456789", email:"houda.hm@email"}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    // fonction de fin de chargement des components 
    componentDidMount(){
        console.log("context.js : componentDidMount !");
        let url = "https://jsonplaceholder.typicode.com/users";
        // lancer une requete de recupération
        axios.get(url)
             .then(res =>{
                 console.log("res : ", res.data);
                 // convertit nae à nom et phone à tel :
                 for(let i = 0; i < res.data.length ; i++){
                    Object.defineProperty(res.data[i], "nom", Object.getOwnPropertyDescriptor(res.data[i], "name"));
                    delete res.data[i]["name"];
                    Object.defineProperty(res.data[i], "tel", Object.getOwnPropertyDescriptor(res.data[i], "phone"));
                    delete res.data[i]["phone"];
                 }
                 console.log("adapter res : ", res.data);
                 this.setState({
                    contacts: res.data
                 });
             }).catch(err => {
                 console.log("Erreur : ", err)
             })

    }

    // rendu de la vue!
    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
