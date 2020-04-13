import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";

import plants from "../../data/plants.json";

const MainPage = () => {
  const { push } = useHistory();

  const handleGoToPlantDetail = (id) => push(`/plant/${id}`);

  return (
    <Layout>
      <div className="content">
        {plants.map(({ id, scintificName, commonName, about, img }) => (
          <Card
            key={id}
            sname={scintificName}
            name={commonName}
            about={about}
            img={img}
            onGoToPlantDetail={() => handleGoToPlantDetail(id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MainPage;
