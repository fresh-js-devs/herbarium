/**
 * FEEDBACK: Component? Neni potreba...ten se pouziva u trid
 */
import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import plants from '../../data/plants.json';
import Herbarium from '../../components/Herbarium/Herbarium'
import Layout from '../../components/Layout/Layout';

import './MainPage.css'


const MainPage = () => {
    /**
   * FEEDBACK: Zapomenuty console.log...nepouzivat nazvy promennych jako x,y...
   */
    plants.map(x => console.log(x));

    const { push } = useHistory();
    const handleGoToHerbariumDetail = id => push(`/herbariumDetail/${id}`);


/**
 * FEEDBACK: nedavat mezery mezi znamenkem rovna se v properties
 * Mozna odstranit celkove zbytecne mezery a prazdne radky...prettier by ti s tim pomohl
 */
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