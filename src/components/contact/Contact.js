import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    render() {
        const {nom, tel, email} = this.props;
        return (
            <div>
                <h1>contact : {nom}</h1>
                <ul>
                    <li>Tel :  {tel}</li>
                    <li>Email :  {email}</li>

                </ul>
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