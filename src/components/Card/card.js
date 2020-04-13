import React from 'react';
import './card.css';

const Card = ({id, familyName, scintificName, commonName, about, img, onGoToDetail}) => {
    return(
        <div className='container' onClick={onGoToDetail}>
            <img className='image' src={img} alt=''></img>
            <h2>{commonName}</h2>
            <p>{about}</p>
        </div>
    );
};
export default Card;