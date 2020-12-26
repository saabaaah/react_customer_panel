import React from 'react'

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
export default Navbar;