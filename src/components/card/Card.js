import React from 'react';
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import './Card.css';
import '../../MainPage';

/**
 * FEEDBACK: Nepouzivane promenne odstranit
 * img nema alt
 * dalo by se oddelit do vice komponent - renderovaci funce je tady zbytecna
 * 
 */
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