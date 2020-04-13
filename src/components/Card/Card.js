import React from 'react';

import './Card.css';

const Card = ({ onGoToPostDetail, commonName, about, img }) => {
    return (
        <div className='card' onClick={onGoToPostDetail}>
                <img src={img} alt='Example plant' />
                <h4>{commonName}</h4>
        </div>
    );
};

export default Card;