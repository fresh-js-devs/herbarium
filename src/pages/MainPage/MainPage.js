import React from 'react';

import Layout from '../../components/Layout/Layout';
import HerbItem from '../../components/HerbItem/HerbItem'; 
import plants from '../../data/plants.json';
const MainPage = () => {
    return (
        <Layout>
            <h1>Herbarium App - Main Page</h1> 
            {plants.map(({id, familyName, commonName})=>(
                <HerbItem 
                    id={id}
                    familyName={familyName}
                    commonName={commonName}
                />
            ))};
            
        </Layout>
    )
};

export default MainPage;