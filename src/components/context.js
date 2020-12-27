import React, { Component } from 'react'

// definir le context
const Context = React.createContext();

// definir un reducer
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter( (contact) =>contact.id !== action.payload)
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
        aze: action => this.setState(state => reducer(state, action))
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
