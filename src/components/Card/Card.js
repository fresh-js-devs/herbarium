import React from 'react';


import plantImg from '../../plant.png'

import './Card.css';

const Card = ({ onGoToPlantDetail, onDeleteClick, familyName, scintificName, about, id }) => {
  const isCardEven = id % 2 === 0;


  return (
    <div className='card'>
      
        <div className='card'>
        <div className='card__profile'>
          <img
            src={plantImg}
            alt='Random plant'
          />
        </div>
        <div className='card__content'>
          <div className='card__content-header'>
            <h4>{familyName}</h4>
          </div>
          <div className='card__message'>{scintificName}</div>
          <div className='card__message'>{about}</div>
          <div className="buttonBlock">
            <button class="buttonDetail" onClick={onGoToPlantDetail}>Detail</button>
            <button class="buttonDelete" onClick={onDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
      

      <div className='card'>
        <div className='card__profile'>
          <img
            src={plantImg}
            alt='Random plant'
          />
        </div>
        <div className='card__content'>
          <div className='card__content-header'>
            <h4>{familyName}</h4>
          </div>
          <div className='card__message'>{scintificName}</div>
          <div className='card__message'>{about}</div>
          <div className="buttonBlock">
            <button class="buttonDetail" onClick={onGoToPlantDetail}>Detail</button>
            <button class="buttonDelete" onClick={onDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;