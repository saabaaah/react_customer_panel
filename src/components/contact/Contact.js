import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'

class Contact extends Component {
    render() {
        const {nom, tel, email} = this.props;
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{nom}</h4>
                    <p class="card-text">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">{nom}</h4>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Tel :  {tel}</li>
                                <li class="list-group-item">Email :  {email}</li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
        )
    }
}


// propriétés par défaut!
Contact.defaultProps = {
    nom:" Sans nom",
    tel:" Sans tel",
    emai:" Sans emai"
};

// les types des propriétés
Contact.propTypes = {
    nom: PropTypes.string.isRequired,
    tel: PropTypes.string,
    email: PropTypes.string
};
export default Contact;