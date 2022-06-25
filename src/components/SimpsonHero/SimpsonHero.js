import React from 'react';

import './SimpsonHero.css'

function SimpsonHero (props) {

    const {name, photo, firstAppearance, description, occupation } = props;

    return(
        <div className={'main_block'}>
            <h2>{name}</h2>
            <h4>{occupation}</h4>
            <img src={photo} alt="Homer Simpson"/>
            <h5>{firstAppearance}</h5>
            <p>{description}</p>
        </div>
    )
}

export default SimpsonHero;