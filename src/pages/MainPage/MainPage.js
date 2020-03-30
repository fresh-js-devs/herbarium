import React from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";

import plants from "../../data/plants.json";

const MainPage = () => {
  const { push } = useHistory();

  const goToPostDetail = id => push(`/herb/${id}`);

  return (
    <Layout>
      {plants.map(
        ({ id, familyName, scintificName, commonName, about, img }) => (
          <Card
            key={id}
            goToDetailPage={() => goToPostDetail(id)}
            familyName={familyName}
            scintificName={scintificName}
            commonName={commonName}
            about={about}
            img={img}
            isDetail={false}
          ></Card>
        )
      )}
    </Layout>
  );
};

export default MainPage;
