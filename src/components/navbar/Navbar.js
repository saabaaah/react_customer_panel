import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

// importer bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = (props) => {
    const {titre} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{titre}</a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>

                </ul>
            </div>
        </nav>

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