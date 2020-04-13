import React from 'react';

import './PlantBox.css';

const PlantBox = () => {
  return (
    <div className='plant-box'>
      <div className='plant-box__profile'>
        <img
          src='https://randomuser.me/api/portraits/women/11.jpg'
          alt='Random user'
        />
      </div>
      <div className='plant-box__main'>
        <textarea placeholder="What's happening?"></textarea>
        <div className='plant-box__action-buttons'>
          <button className='btn-primary'>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default PlantBox;
