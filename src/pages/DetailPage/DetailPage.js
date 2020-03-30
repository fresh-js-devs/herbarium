import React from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import { useParams, useHistory } from "react-router-dom";

import plants from "../../data/plants.json";

import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const herb = plants.find(herb => herb.id === parseInt(id));
  const { familyName, scintificName, commonName, about, img } = herb;

  return (
    <Layout>
      <Card
        key={id}
        familyName={familyName}
        scintificName={scintificName}
        commonName={commonName}
        about={about}
        img={img}
        isDetail={true}
      />
      <div className="back" onClick={() => history.goBack()}>
        <span role="img" aria-label="back">
          ↩️ <strong>Back</strong>
        </span>
      </div>
    </Layout>
  );
};

export default DetailPage;
