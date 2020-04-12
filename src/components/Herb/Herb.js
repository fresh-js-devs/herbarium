import React from 'react';
import './Herb.css';

const Herb = ({onGoToHerbDetail, commonName, img, about}) => {
    return(
        <div onClick = {onGoToHerbDetail} className = 'herb'>            
            <div className  = 'herb-content'>
                <div className = 'herb-content-header'>
                    <h3>{commonName}</h3>
                    <p>{about}</p>
                </div>
            </div>
            <div className = 'herb-img'>
                <img src = {img} alt = {commonName}/>
            </div>
        </div>
    );
};

export default Herb;