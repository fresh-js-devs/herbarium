import React from 'react';
import { useParams } from "react-router-dom";
/**
 * FEEDBACK: Nepouzite importy odstranit prosim
 */
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import Layout from '../layout/Layout';
import Card from './Card';
import Herbs from '../../data/plants.json';
import './DetailCard.css';
import { useHistory } from 'react-router-dom';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

/**
 * FEEDBACK: Neprehledne formatovani, zkus pouzit prettier
 * Malo komponentujes...layout by mel byt oddeleny
 */
const CardDetail  = () => {
    const { id } = useParams();
    /**
     * FEEDBACK: Nepouzite promenne odstranit prosim
     */
    const { push } = useHistory();;

  const herb = Herbs.find(Herbs => Herbs.id === parseInt(id));
  const { familyName, scintificName, commonName, about, img} = herb;
  /**
 * FEEDBACK: window.scrollTo? 
 */
  window.scrollTo(0,0);
    return(
        <div className="layout">
            <a href="/" className="back">Back to main page</a>
            <h1>Common name: {commonName}</h1>
    <h2>Family: {familyName}</h2>
    <h2>Scientific name: {scintificName}</h2>
    <p><b>About:</b> {about}</p>
    <ReactFancyBox
        thumbnail={img}
        image={img}
    />
    

        </div>
    );
};

export default CardDetail;