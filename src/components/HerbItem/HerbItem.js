import React from 'react';
import './HerbItem.css';

const HerbItem =({id, familyName, commonName})=>{
    return(
        <div className='herbitem'>
            <div className='herbitem__content'>
               {id}
               {familyName}               
            </div>
        </div>
    );
};

export default HerbItem; 