import React from 'react'

// importer style
import './style.css'

export default function About(props) {
    return (
        <div>
            <h1>A propos!</h1>
            <p>
                {props.match.params.nom} <br/>
                Voici cette page!
            </p>
        </div>
    )
}
