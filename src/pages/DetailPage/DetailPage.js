import React from "react";
import Layout from "../../components/Layout/Layout";

import { useParams } from "react-router-dom";

import plants from "../../data/plants.json";

import "./DetailPage.css";

import plantImg from '../../plant.png'

/**
 * FEEDBACK: Pripona .js byt nemusi
 */
import MessageBlock from '../../components/atoms/MessageBlock.js'
import OneMessage from '../../components/atoms/OneMessage.js'


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

          <MessageBlock>
            <OneMessage>
              Scintific name: 
            </OneMessage>
            {scintificName}
          </MessageBlock>
          <hr/>

          <MessageBlock>
            <OneMessage>
              Common name:
            </OneMessage>
            {commonName}
          </MessageBlock>
          <hr/>

          <MessageBlock>
            <OneMessage>
              About:
            </OneMessage>
            {about}
          </MessageBlock>
        </div>

      </div>
    </Layout>
  );
};

export default DetailPage;