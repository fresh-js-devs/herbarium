import React from "react";
import Layout from "../../components/Layout/Layout";

import { useParams } from "react-router-dom";

import plants from "../../mocks/plants.json";

import "./Detail.css";

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
