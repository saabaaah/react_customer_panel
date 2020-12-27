import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context';

class Contacts extends Component {

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
        return (
            <Consumer>
                {dq =>
                        (
                        <div>
                            {dq.contacts.map((contact) => (
                                <Contact data={contact} onDeleteContactChild={this.deleteContactParent.bind(this, contact.id)}/>
                            ))
                            }
                        </div>
                    )
                }
            </Consumer>
        )
    }
}

export default  Contacts;