import React from 'react';
import './Card.css';
import '../../MainPage';

const Card = ({
    id,
    familyName,
    scintificName,
    commonName,
    about,
    img,
    onGoToHerbDetail
}) => {
    const renderNormalView = () => {
        return (
            <>
                <div onClick={onGoToHerbDetail} className='card'>
                    <h2 className="cardText">{commonName}</h2>
                    <img src={img} className="cardImage"></img>
                </div>
            </>
        );
    };

    return (
        <div>
          {renderNormalView()}
        </div>
      );
};

export default Card;