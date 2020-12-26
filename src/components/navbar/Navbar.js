import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

const Navbar = (props) => {
    const {titre} = props;
    return (
        <div>
            <h1>{titre}</h1>
        </div>
    )
}

// valeurs par défaut
Navbar.defaultProps = {
    titre: " Une liste "
};

// les types des propriétés
Navbar.propTypes = {
    titre :PropTypes.string.isRequired
};
export default Navbar;