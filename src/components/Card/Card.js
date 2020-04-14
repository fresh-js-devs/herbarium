import React from 'react';

import plantImg from '../../plant.png'

import './Card.css';

import PlantCard from '../../components/atoms/PlantCard.js'
import PlantName from '../../components/atoms/PlantName.js'
import ButtonBlock from '../../components/atoms/ButtonBlock.js'
import ButtonDetail from '../../components/atoms/ButtonDetail.js'
import ButtonDelete from '../../components/atoms/ButtonDelete.js'

/**
 * FEEDBACK: Zbytecny return a slozene zavorky
 */
const Card = ({ onGoToPlantDetail, onDeleteClick, familyName}) => {

  return (
    <PlantCard>
        <img
          src={plantImg}
          alt='Random plant'
        />
        
        <PlantName>{familyName}</PlantName>

        <ButtonBlock>
          <ButtonDetail onClick={onGoToPlantDetail}>Detail</ButtonDetail>
          <ButtonDelete onClick={onDeleteClick}>Delete</ButtonDelete>
        </ButtonBlock>
    </PlantCard>
  );
};

export default Card;