import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

class Contact extends Component {

    showContact(params) {
        console.log("showContact",params);
        
    }
    render() {
        const {nom, tel, email} = this.props.data;
        return (

        <div class="card-text">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">
                        {nom} <i onClick={this.showContact.bind(this, nom)} class="fa fa-sort-desc" aria-hidden="true"></i>
                    </h4>
                    <p class="card-text">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Tel :  {tel}</li>
                            <li class="list-group-item">Email :  {email}</li>
                        </ul>
                    </p>
                </div>
                
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
    data: PropTypes.object.isRequired
};
export default Contact;