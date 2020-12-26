import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

// importer bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = (props) => {
    const {titre} = props;
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a class="navbar-brand" href="#">{titre}</a>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
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