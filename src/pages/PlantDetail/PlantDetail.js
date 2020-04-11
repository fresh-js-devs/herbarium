import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {Row,Col,Card} from 'antd'
import './PlantDetail.css'

import plants from '../../data/plants.json';
import SiteLayout from '../../components/SiteLayout/SiteLayout';

const PlantDetail=()=>{
    const {id}=useParams();
    const plant=plants.find(plant=>plant.id===parseInt(id));
    const {familyName,scintificName,commonName,about,img}=plant;
    const {goBack}=useHistory();
    const {Meta}=Card;

    const CardDescription=()=>{
        return(
            <>
            <h4>Common Name</h4>
            <p>{commonName}</p>
            <h4>Family Name</h4>
            <p>{familyName}</p>
            <h4>About</h4>
            <p>{about}</p>
            </>
        )
    }
    console.log(plant);

    return(
        <SiteLayout>
            <Row justify="center">
                <Col>
                <button type="button" onClick={goBack} className="styled-button">Go Back</button>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Card className="image-style" cover={<img alt="plant" src={img}/>}>
                        <Meta title={scintificName} description={<CardDescription/>}/>
                    </Card>
                </Col>
            </Row>
        </SiteLayout>
    )
}
export default PlantDetail;