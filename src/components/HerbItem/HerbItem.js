import React from 'react';
import './HerbItem.css';

const HerbItem =({key, familyName, commonName})=>{
    return(
        <div className='herbitem'>
            <div className='herbitem__content'>
               {key}
               {familyName}               
            </div>
        </div>
    );
};

export default HerbItem; 