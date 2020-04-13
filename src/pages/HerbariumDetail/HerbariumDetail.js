import React, { Component, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import herbariums from '../../data/plants.json'
import Layout from '../../components/Layout/Layout';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn'

import './HerbariumDetail.css'

const HerbariumDetail = () => {

    const {id} =useParams();
    const [specificHerbarium, setSpecificHerbarium] = useState({});

    //const history = useHistory();

    const { push } = useHistory();
    const goBack = () => push('/');

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
                    <h1>{specificHerbarium.familyName}</h1>
                    <img src={specificHerbarium.img}/>
                </div>
                <div className='herbal-detail-content'>
                    <div><b>scintificName: </b>{specificHerbarium.scintificName}</div>
                    <div><b>commonName: </b>{specificHerbarium.commonName}</div>
                    <p>{specificHerbarium.about}</p>
                </div>
                
            </div>
        )}
        <GoBackBtn goBack={() => goBack()} />
        </Layout>
    );

}


export default HerbariumDetail;