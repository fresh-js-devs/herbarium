import React from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import HerbItem from '../../components/HerbItem/HerbItem'; 
import plants from '../../data/plants.json';
const MainPage = () => {

    const {push} = useHistory();

    const handleGoToHerbDetail = id => push(`/herb/${id}`);
    return (
        <Layout>
            <h1>Herbarium App - Main Page</h1> 
            {plants.map(({id, commonName, img})=>(
                <HerbItem                     
                    commonName={commonName}
                    img={img}
                    onGoToHerbDetail = {() => handleGoToHerbDetail(id)}
                />
            ))};
            
        </Layout>
    )
};

export default MainPage;