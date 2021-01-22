import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

// importer bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = (props) => {
    const {titre} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" tp="/">{titre}</Link>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={classnames("nav-item", {"active": true})}>
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className={classnames("nav-item", {"active": false} )}>
                        <Link className="nav-link" to="/contact/add">Ajouter </Link>
                    </li>

                    <li className={classnames("nav-item", {"active": false} )}>
                        <Link className="nav-link" to="/about">À propos </Link>
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