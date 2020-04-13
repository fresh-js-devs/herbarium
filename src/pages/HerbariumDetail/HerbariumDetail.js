import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import herbariums from '../../data/plants.json'
import Layout from '../../components/Layout/Layout';

import './HerbariumDetail.css'

const HerbariumDetail = () => {

    const {id} =useParams();
    const [specificHerbarium, setSpecificHerbarium] = useState({});

    useEffect(() => {
        if(id) {
            const herbarium = herbariums.find(herbarium => herbarium.id === parseInt(id));
            setSpecificHerbarium(herbarium);
        }
    },[id]);

    return (
        <Layout>
        {specificHerbarium && (
            <div className='herbarium-detail'>
                <div className='herbal-detail-header'>
                    <h3>{specificHerbarium.familyName}</h3>
                </div>
                <div className='herbal-detail-content'>
                    <li>{specificHerbarium.scintificName}</li>
                    <li>{specificHerbarium.commonName}</li>
                    <p>{specificHerbarium.about}</p>
                </div>
                
            </div>
        )}
        </Layout>
    );

}


export default HerbariumDetail;