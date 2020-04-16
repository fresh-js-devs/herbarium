import React from "react";
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import Layout from "../../components/Layout/Layout";

/**
 * FEEDBACK: Tenhle import bych presunul pod import Reactu
 */
import { useParams } from "react-router-dom";

import plants from "../../mocks/plants.json";

import "./Detail.css";

/**
 * FEEDBACK: Malo komponentujes...napriklad header by se dal presunout do vlastni komponenty
 * Nazvy jsou dost zavadejici...ve slozce SecondPage mas soubor Detail.js ktery ma komponentu PostDetail
 */
const PostDetail = () => {
  const { id } = useParams();

  const plant = plants.find((plant) => plant.id === parseInt(id));
  const { familyName, bscintificName, commonName, about, img } = plant;

  return (
    <Layout>
      <div className="post-detail">
        <div className="post-detail__header">
          <img src={img} alt="Random user" />
          <div className="post-detail__header-name">
            <strong>{familyName}</strong>
            <span>{bscintificName}</span>
            <span>{commonName}</span>
          </div>
        </div>
        <div className="post-detail__content">
          <div className="post__message">{about}</div>
          <div className="post-detail__action-buttons"></div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
