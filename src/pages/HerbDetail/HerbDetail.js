import React from 'react';
import Layout from '../../components/Layout/Layout';
import {useParams} from 'react-router-dom';
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import './HerbDetail.css';
import herbs from '../../data/plants.json';

const HerbDetail = () => {
    const {id} = useParams();
    const herb = herbs.find(herb => herb.id === parseInt(id));
    /**
     * FEEDBACK: mezery mezi destructuringu
     */
    const {familyName,scintificName,commonName,about,img} = herb;
    /**
     * FEEDBACK: Vice kompontuj...napriklad header by mohla byt vlastni komponenta atd...
     * mezery v pri props se nedavaji
     */
    return(
        <Layout>
            <div className = 'herb-detail'>
                <div className = 'herb-detail-header'>
                    <div className = 'herb-detail-names'>
                        <p><span className = 'bold'>Family name:</span> {familyName}</p>
                        <p><span className = 'bold'>Scientific name:</span> {scintificName}</p>
                        <p><span className = 'bold'>Common name:</span> {commonName}</p>
                    </div>
                </div>
                <div className = 'herb-detail-body'>
                    <div className = 'herb-detail-about'>
                            <p><span className = 'bold'>About:</span> {about}</p>
                    </div>
                    <div className = 'herb-detail-image'>
                        <img src = {img} alt = {commonName}/>
                    </div>
                </div>                    
            </div>   
        </Layout>
    );
};

export default HerbDetail;