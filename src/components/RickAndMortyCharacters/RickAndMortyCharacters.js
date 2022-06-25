import React from 'react';

function RickAndMortyCharacters(props) {

    const {id, name, status, species, gender, image} = props;

    return (
        <div>
            <div>{id}</div>
            <h2>{name}</h2>
            <h4>{gender}</h4>
            <h5>{status}</h5>
            <p>{species}</p>
            <img src={image} alt={name}/>
        </div>
    );
}

export default RickAndMortyCharacters;