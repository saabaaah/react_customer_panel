import React from 'react'

const Navbar = (props) => {
    const {titre} = props;
    return (
        <div>
            <h1>{titre}</h1>
        </div>
    )
}

export default Navbar;