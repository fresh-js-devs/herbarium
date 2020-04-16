import React from 'react';
import Layout from '../../components/Layout/Layout';

import plants from '../../data/plants.json';

/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy. melo by to byt pod importem reactu
 */
import { useParams } from 'react-router-dom';

import "./PostDetail.css";


const PostDetail = () => {
    const { id } = useParams();

    const plant = plants.find(plant => plant.id === parseInt(id));
    const { commonName, scintificName, familyName, about, img } = plant;


    return (
        <Layout>
            <div className="card-detail">
                <div className="card-detail__header">
               
                    <div className="card-detail__header-name">
                        <h2>Common name: {commonName}</h2>
                        <h4>Family name: {familyName}</h4>
                        <h4>Scintific name: {scintificName}</h4>
                    </div>
                </div>

                <div className="card-detail__content">
                    <div className="card__message"><h5>About: </h5>{about}</div>
                    <img src={img} alt="Example plant" />
                </div>
            </div>
        </Layout>
    );
};

export default PostDetail;
