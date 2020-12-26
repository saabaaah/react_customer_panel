import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {

    // créer les attributs
    state = {
        contacts: [
            {id: 1, nom: "Sabah HM", tel: "123456789", email:"saabaaah@email"},
            {id: 2, nom: "yassine KH", tel: "00123456", email:"yacine.kh@email"},
            {id: 3, nom: "Mani HM", tel: "123456789", email:"mani.hm@email"},
            {id: 4, nom: "Sarah HM", tel: "123456789", email:"sarah.hm@email"},
            {id: 5, nom: "Houda HM", tel: "123456789", email:"houda.hm@email"}
        ]
    }

    // supprimer un contact
    deleteContactParent = (id) => {
        console.log("deleteContactParent", id);
        const {contacts} = this.state;
        const liste_ = contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: liste_,
        })

    }
    render() {
        const {contacts} = this.state;
        return (
            <div>
                {contacts.map((contact) => (
                    <Contact data={contact} onDeleteContactChild={this.deleteContactParent.bind(this, contact.id)}/>
                ))
                }
            </div>
        )
    }
}

export default  Contacts;