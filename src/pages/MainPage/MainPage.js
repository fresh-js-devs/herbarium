import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import plants from '../../data/plants.json';
import Herbarium from '../../components/Herbarium/Herbarium'
import Layout from '../../components/Layout/Layout';

import './MainPage.css'


const MainPage = () => {
    
    plants.map(x => console.log(x));

    const { push } = useHistory();
    const handleGoToHerbariumDetail = id => push(`/herbariumDetail/${id}`);



    return (
        
        <Layout>
        <ul>
            {plants.map(({id, familyName, scintificName,commonName, about,img}) => 
                (
                    <Herbarium 
                        key = {id}
                        familyName = {familyName}
                        scintificName = {scintificName}
                        commonName = {commonName}
                        about = {about}
                        img = {img}
                        onGoTomDetail={() => handleGoToHerbariumDetail(id)}
                    />
                
                )
            )}
        </ul>
        </Layout>
        
    )
    
    
};

    

    


export default MainPage;