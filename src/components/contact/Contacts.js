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
    render() {
        const {contacts} = this.state;
        return (
            <div>
                {contacts.map((contact) => (
                    <Contact data={contact} />
                ))
                }
            </div>
        )
    }
}

export default  Contacts;