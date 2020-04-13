import React from 'react';
import './HerbItem.css';


const HerbItem = ({ id, commonName, img, onGoToHerbDetail}) => {


    return (
        
        <div onClick = {onGoToHerbDetail} className='herbitem'>
            <div className='herbitem__picture'>
                <img src={img} alt='mock picture' />
            </div>
            <div className='herbitem__header'>
                <span>common Name: <strong>{commonName}</strong></span>
            </div>            
        </div>
        
    );
};

export default HerbItem; 