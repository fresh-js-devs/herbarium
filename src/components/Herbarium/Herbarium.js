import React, { Component } from 'react';

import './Herbarium.css'

const Herbarium = ({onGoTomDetail,familyName, scintificName,commonName, about, img}) => {
    
    
    return (
        <div className='herbarium-card' onClick={onGoTomDetail}>
            <h3>{familyName}</h3>
            <li>{scintificName}</li>
            <li>{commonName}</li>
            <p>{about}</p>
            <img src={img}/>
        </div>
    );
};

export default Herbarium;