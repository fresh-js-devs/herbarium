import React from 'react';
import plants from '../data/plants.json';
import {useParams, NavLink} from 'react-router-dom';

const HerbDetail = () => {
    const { id } = useParams();
    const plant = plants.find((plant) => plant.id === parseInt(id));
    const{img, commonName, scintificName, familyName} = plant;
    return(
        <div className='container'>
            <img src={img} alt=''/>
            <h2>Common Name:</h2>
            <p>{commonName}</p>
            <h2>Scintific Name:</h2>
            <p>{scintificName}</p>
            <h2>Family Name:</h2>
            <p>{familyName}</p>
            <NavLink exact to='/'>Go back</NavLink>
        </div>
    );
};
export default HerbDetail;