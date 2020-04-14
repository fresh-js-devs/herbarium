import React from 'react';

import './Card.css';
import Line from '../atoms/Line';

/**
 * FEEDBACK: Rozdělil bych víc do menších komponent, které utvářejí jeden celek
 * Card bych do molecules
 * Na karte bych pridal css pravidlo cursor: pointer; at je videt ze je to klikatelne
 */

const Card = ({
  goToDetailPage,
  familyName,
  scintificName,
  commonName,
  about,
  img,
  isDetail,
}) => {
  const detailCard = () => (
    <div onClick={goToDetailPage} className='cardDetail'>
      <div className='cardHeading'>
        <div className='languages'>
          <h3>
            <span role='img' aria-label='herb'>
              🌿
            </span>
            <strong> {commonName}</strong>
          </h3>
          <p>{familyName}</p>
          <p>{scintificName}</p>
        </div>
        <img className='picture' src={img} alt={commonName} />
      </div>
      <Line />
      <div className='about'>{about}</div>
    </div>
  );

  const thumbCard = () => (
    <div onClick={goToDetailPage} className='card'>
      <div className='cardHeading'>
        <div className='languages'>
          <h3>
            <span role='img' aria-label='herb'>
              🌿
            </span>
            <b> {commonName}</b>
          </h3>
          <p>{familyName}</p>
          <p>{scintificName}</p>
        </div>
        <img className='picture' src={img} alt={commonName} />
      </div>
    </div>
  );

  return isDetail ? detailCard() : thumbCard();
};

export default Card;
