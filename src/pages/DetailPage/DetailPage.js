import React from "react";
import Layout from "../../components/Layout/Layout";

import { useParams } from "react-router-dom";

import plants from "../../data/plants.json";

import "./DetailPage.css";

import plantImg from '../../plant.png'


const DetailPage = () => {
  const { id } = useParams();

  const plant = plants.find(plant => plant.id === parseInt(id));
  const { familyName, scintificName, commonName, about } = plant;



  return (
    <Layout>
      <div className="detail-page">
        <div className="detail-page__header">
          <img
            src={plantImg}
            alt="Random plant"
          />
          <div className="detail-page__header-name">
            <h2>{familyName}</h2>
          </div>
        </div>
        <div className="detail-page__content">
          <div className="messageBlock">
            <div className="card__message">
              <strong>Scintific name: </strong>
            </div>
              {scintificName}
          </div>
          <hr/>

          <div className="messageBlock">
            <div className="card__message">
              <strong>Common name: </strong>
            </div>
              {commonName}
          </div>
          <hr/>

           <div className="messageBlock">
            <div className="card__message">
              <strong>About: </strong>
            </div>
            {about}
          </div>

          <div className="detail-page__action-buttons">
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;